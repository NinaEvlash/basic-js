const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const resArr = [];
  while (arr.length > 0) {
    const ferstArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === arr[i + 1]) {
        ferstArr.push(arr[i]);
      } else {
        ferstArr.push(arr[i]);
        break;
      }
    }
    const index = ferstArr.length;
    if (index === 1) resArr.push(arr[0]);
    else resArr.push(String(index), arr[0])
    arr.splice(0, index);
  }
  const result = resArr.join('');
  return result;
}

module.exports = {
  encodeLine
};
