const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
  id: 4
};

// takes string and salt
const token = jwt.sign(data, '123abc');
console.log(token);
jwt.verify(token, '123abc');

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }