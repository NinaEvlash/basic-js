const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function getSum(n) {
    let numberSum = 0;
    while (n) {
      numberSum += n % 10;
      n = Math.floor(n / 10);
    }
    return numberSum;
  }
  while (n >= 10) {
    n = getSum(n);
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
