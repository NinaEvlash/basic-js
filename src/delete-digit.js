const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = str.split('');
  let index = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
      index = arr.indexOf(arr[i]);
      break;
    } else if (arr[i] > arr[i + 1]) {
      index = arr.indexOf(arr[i + 1]);
      break;
    }
  }
  arr.splice(index, 1);
  const res = Number(arr.join(''));
  return res;
}

module.exports = {
  deleteDigit
};
