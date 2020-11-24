const crypto = require('crypto');
// console.log(crypto.getHashes());

// const hasher = crypto.createHash('sha512');
// hasher.update('superSecurePassword1!');
// const digest = hasher.digest();
// console.log(digest.toString('base64'));

// const hasher2 = crypto.createHash('sha512');
// hasher2.update('superSecurePassword1!');
// const digest2 = hasher2.digest();
// console.log(digest2.toString('base64'));

// // whenever we hash the same input, using the same hashing function, we're GUARANTEED the same result

// console.log(digest.toString('base64') === digest2.toString('base64'));

// const password = 'superSecurePassword1!';
const util = require('util');
const salter = util.promisify(crypto.randomBytes);
const hasher = util.promisify(crypto.pbkdf2);

async function generateHashedPW(password) {
  // generate random salt string
  const salt = (await salter(64)).toString('base64');
  // we add the salt to the password we're looking to hash, which will ensure the same password inputs will result in different hash outputs
  // hash('password384hduj37g21ndw8y2he')
  const hashed = (await hasher(password, salt, 10000, 64, 'sha512')).toString('base64');
  console.log(hashed);
  // we store the hashed output and the salt used in the db
  // we need to store the salt in the db so that we can attempt to validate the password later, by hashing a password with the exact same salt
  const hashedPWForDB = `${salt}:${hashed}`;
  console.log(hashedPWForDB);
}

// generateHashedPW('superSecurePassword1!');

async function checkPassword(password, hashedPW) {
  const [salt, hashed] = hashedPW.split(':');
  const attempt = await hasher(password, salt, 10000, 64, 'sha512');
  hasher();
  // console.log(attempt.toString('base64'));
  console.log(attempt.toString('base64') === hashed.toString('base64'));
}

checkPassword(
  'superSecurePassword1!',
  'ofHfprYabGeVF7afI0xVthBK0Hw07ImN+aQECBzrp9KhNfU6fOmeREUv0ajVy+5MpWFqI94+mPQfpLPgm8wdIQ==:VZCPMdnqupzMav78vs//V+gTWPt6UZluXL2vNobCr2hNta7+zATZEtf1QkOTHa0Wh1daFeILCAlnKymUFLKQOw=='
);

// 1. user makes initial request to the server
// 2. server responds with a public key
// 3. any subsequent requests to the server will be encrypted with this public key
// 4. server uses the private key to decrypt data
