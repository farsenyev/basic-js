const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, count = 1) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) return count
    let maxDepth = count
    for (let item of arr){
      if (Array.isArray(item)){
        const depth = this.calculateDepth(item, count + 1)
        maxDepth = Math.max(maxDepth, depth)
      }
    }
    return maxDepth
  }
}

module.exports = {
  DepthCalculator
};
