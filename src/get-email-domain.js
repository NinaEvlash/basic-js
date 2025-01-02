const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [];
  for (let i = email.length - 1; i >= 0; i -= 1) {
    arr.push(email[i]);
    if (email[i] === '@') break;
  }
  arr.pop();
  const res = arr.reverse().join('');
  return res;
}

module.exports = {
  getEmailDomain
};
