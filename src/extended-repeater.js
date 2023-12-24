const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let repAdd = '';
  let separator = options.separator ? options.separator : '+';
  if (options.addition) repAdd = options.addition?.toString();
  if (options.additionRepeatTimes) repAdd = Array(options.additionRepeatTimes).fill(String(options.addition)).join('');
  if (options.additionSeparator) repAdd = Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator);
  const repStr = Array(options.repeatTimes).fill(String(str) + repAdd).join(separator);
  return repStr
}

module.exports = {
  repeater
};
