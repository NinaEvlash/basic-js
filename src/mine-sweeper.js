const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixArr = matrix;
  let colMines = 0;
  for (let i = 0; i < matrixArr.length; i += 1) {
    for (let k = 0; k < matrixArr[i].length; k += 1) {
      if (matrixArr[i][k] === true) colMines += 1;
    }
  }
  for (let i = 0; i < matrixArr.length; i += 1) {
    for (let k = 0; k < matrixArr[i].length; k += 1) {
      if (matrixArr[i][k] === matrixArr[i][0] &&  matrixArr[i][k] === true) {
        matrixArr[i][k + 1] = colMines;
        matrixArr[i][k] = colMines - 1;
      } 
      else if (matrixArr[i][k] !== matrixArr[i][0] &&  matrixArr[i][k] === true) {
        matrixArr[i][k - 1] = colMines;
        matrixArr[i][k] = colMines - 1;
      }
      else if (matrixArr[i][k] === false) {
        if (colMines === 0) matrixArr[i][k] = 0;
        else matrixArr[i][k] = colMines - 1;
      }
    }
  }
  return matrixArr;
}

module.exports = {
  minesweeper
};
