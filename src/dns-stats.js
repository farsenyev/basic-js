const { NotImplementedError } = require('../extensions/index.js');
const {c} = require("sinon/lib/sinon/spy-formatters.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let obj = {}
  for (const el of domains){
    const part = el.split('.').reverse()
    let current = ''
    for (const p of part){
      current = (current ? current : '') + '.' + p
      if (!obj[current]){
        obj[current] = 1
      }else {
        obj[current]++
      }
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
