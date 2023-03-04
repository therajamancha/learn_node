const url = require("url");

const myUrl = new URL("https://www.example.com:8080/path?query=string#hashTag");
// get has value in params
console.log(myUrl.hash);
// get hostname with port number
console.log(myUrl.host);
// get host name only
console.log(myUrl.hostname);
// get entir url
console.log(myUrl.href);
// get path of url
console.log(myUrl.pathname);
// get port number
console.log(myUrl.port);
// get protocol https or http
console.log(myUrl.protocol);
// get text after ? and to #
console.log(myUrl.search);
// get parms in object
console.log(myUrl.searchParams);
//  get url
console.log(myUrl.toString());
// get url 
console.log(myUrl.toJSON());
