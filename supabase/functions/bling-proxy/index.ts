import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // 1. Handle CORS Preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get Bling credentials
    const clientId = Deno.env.get("BLING_CLIENT_ID");
    const clientSecret = Deno.env.get("BLING_CLIENT_SECRET");
    const initialRefreshToken = Deno.env.get("BLING_REFRESH_TOKEN");

    if (!clientId || !clientSecret) {
      throw new Error("Missing BLING_CLIENT_ID or BLING_CLIENT_SECRET secrets");
    }

    // Function to refresh the token using Bling OAuth2
    const refreshBlingToken = async (currentRefreshToken: string) => {
      const authHeader = btoa(`${clientId}:${clientSecret}`);
      const body = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: currentRefreshToken,
      });

      const response = await fetch("https://api.bling.com.br/Api/v3/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Basic ${authHeader}`,
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Failed to refresh token:", errText);
        throw new Error("Failed to refresh Bling token: " + errText);
      }

      const data = await response.json();
      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
      };
    };

    // 2. Fetch the latest token from the database
    let { data: tokenData, error: dbError } = await supabase
      .from("bling_tokens")
      .select("*")
      .eq("id", 1)
      .single();

    let accessToken = tokenData?.access_token;
    let refreshToken = tokenData?.refresh_token || initialRefreshToken;

    // If we don't have an access token yet but have a refresh token, generate one now.
    if (!accessToken && refreshToken) {
      console.log("No access token found, generating one using refresh token...");
      const newTokens = await refreshBlingToken(refreshToken);
      accessToken = newTokens.accessToken;
      refreshToken = newTokens.refreshToken;

      // Save to database
      await supabase.from("bling_tokens").upsert({
        id: 1,
        access_token: accessToken,
        refresh_token: refreshToken,
        updated_at: new Date().toISOString(),
      });
    }

    if (!accessToken) {
      throw new Error("No access token or refresh token available.");
    }

    // 3. Forward request to Bling API
    let targetPath = "produtos";
    let page = "1";
    let limit = "100";

    if (req.method === "POST") {
      try {
        const body = await req.json();
        if (body.path) targetPath = body.path;
        if (body.pagina) page = String(body.pagina);
        if (body.limite) limit = String(body.limite);
      } catch (e) {
        // ignore JSON parse error
      }
    } else {
      const url = new URL(req.url);
      targetPath = url.searchParams.get("path") || targetPath;
      page = url.searchParams.get("pagina") || page;
      limit = url.searchParams.get("limite") || limit;
    }

    const fetchBlingApi = async (token: string) => {
      return fetch(`https://api.bling.com.br/Api/v3/${targetPath}?pagina=${page}&limite=${limit}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json"
        }
      });
    };

    let blingResponse = await fetchBlingApi(accessToken);

    // 4. Handle token expiration (401 Unauthorized)
    if (blingResponse.status === 401) {
      console.log("Access token expired. Refreshing...");
      const newTokens = await refreshBlingToken(refreshToken);
      accessToken = newTokens.accessToken;
      refreshToken = newTokens.refreshToken;

      // Update the database with new tokens
      await supabase.from("bling_tokens").upsert({
        id: 1,
        access_token: accessToken,
        refresh_token: refreshToken,
        updated_at: new Date().toISOString(),
      });

      // Retry the API request with the new access token
      blingResponse = await fetchBlingApi(accessToken);
    }

    const responseData = await blingResponse.text();

    return new Response(responseData, {
      status: blingResponse.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
