import http from 'http';
import https from 'https';

const options = {
  hostname: 'api.mercadopago.com',
  port: 443,
  path: '/checkout/preferences/search?limit=2',
  method: 'OPTIONS',
  headers: {
    'Origin': 'https://www.perolapratas.com.br',
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Request-Headers': 'Authorization'
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers, null, 2)}`);
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
