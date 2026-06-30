ALTER TABLE public.bling_tokens ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.bling_tokens FROM PUBLIC;
REVOKE ALL ON public.bling_tokens FROM anon;
REVOKE ALL ON public.bling_tokens FROM authenticated;
GRANT ALL ON public.bling_tokens TO service_role;

-- No policies created: with RLS enabled and no policies, anon/authenticated have zero access.
-- service_role bypasses RLS, so the bling-proxy edge function continues to function.