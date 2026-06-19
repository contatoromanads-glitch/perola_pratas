

async function test() {
  try {
    const res = await fetch('https://api.mercadopago.com/checkout/preferences/5868625-72579fe4-a221-4569-9c9e-91020a09f553', {
      headers: {
        Authorization: 'Bearer APP_USR-4879369062166829-061013-de58c414871860783ef87ca1dadb1a3f-5868625'
      }
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}
test();
