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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const rows = matrix.length
  const cols = matrix[0].length

  const resArr = Array.from({length: rows}, () => Array(cols).fill(0))
  const mineFound = (a, b) => a >= 0 && a < rows && b >= 0 && b < cols && matrix[a][b]
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      const neighbour = [
          [i - 1, j - 1],[i - 1, j],[i - 1, j + 1],
          [i, j - 1],                     [i, j + 1],
          [i + 1, j - 1],[i + 1, j],[i + 1, j + 1]
      ]
      for (const [a, b] of neighbour){
        if (mineFound(a, b)){
          resArr[i][j]++
        }
      }
    }
  }
  return resArr
}

module.exports = {
  minesweeper
};
