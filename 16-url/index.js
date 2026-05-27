const url = require('url');

const myURL = new url.URL('https://example.com.br/catalog?produtos=cadeira');

console.log(myURL.host);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.searchParams.get('produtos'));