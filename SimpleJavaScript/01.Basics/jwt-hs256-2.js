

// console.log('Hello world, I am here now');

// var jwt = require('jsonwebtoken');
// var secretKey = 'secret-key';

// var payload = {
//     name: 'Alice New'
// };

// var newToken = jwt.sign(payload, secretKey);
// console.log(newToken);

// console.log(jwt);

const base64URL = require('base64url');

var myHeaders = {
    "alg": "HS256",
    "typ": "JWT"
  };

var myClaims = {
    name: 'Rafał Pryjda'
};
var secret = 'my-key';

var header = base64URL.encode(myHeaders,"utf8");
var payload = base64URL.encode(myClaims,"utf8");
var data = header + "." + claims;
 
var signature = base64URL.encode(HMACSHA256(payload, secret));
 
var encodedJWT = data + "." + signature;

console.log(encodedJWT)