const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  let arrIndex = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
      arrIndex.push(i);
    }
  }
  const sortArr = newArr.sort((a,b) => a - b);
  for(let i = 0; i < sortArr.length; i += 1) {
    arr[arrIndex[i]] = sortArr[i];
  }
  return arr;
}

module.exports = {
  sortByHeight
};
