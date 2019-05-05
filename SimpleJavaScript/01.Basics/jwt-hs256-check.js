var jwt = require('jsonwebtoken');
var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UgTmV3IiwiaWF0IjoxNTU0NTY4MjI5fQ.FcIS5dX1r7JFQGgqe0KoFYQvaikkMfTdZfTLH_PXn-E';
var secretKey = 'secret-key';
const verify = jwt.verify(existingToken, secretKey);
console.log("Decode JWT: ", verify);
