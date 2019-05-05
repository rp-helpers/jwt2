

// console.log('Hello world, I am here now');

var jwt = require('jsonwebtoken');
var secretKey = 'secret-key';

var payload = {
    name: 'Alice New'
};

var newToken = jwt.sign(payload, secretKey);
console.log(newToken);

// console.log(jwt);