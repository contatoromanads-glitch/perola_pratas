

async function test() {
  try {
    const res = await fetch('https://api.mercadopago.com/checkout/preferences/search?limit=2', {
      headers: {
        Authorization: 'Bearer APP_USR-4879369062166829-061013-de58c414871860783ef87ca1dadb1a3f-5868625'
      }
    });
    const data = await res.json();
    console.log(Object.keys(data));
    console.log("data.elements exists?", !!data.elements);
  } catch (err) {
    console.error(err);
  }
}
test();
