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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return str.replace(/([a-z])\1*/g, (e) => (e.length > 1 ? e.length + e[0] : e[0]))
}

module.exports = {
  encodeLine
};
