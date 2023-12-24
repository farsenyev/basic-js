const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // 20192701 - number
  // remove line with error and write your code here
  if (!date || isNaN(date)){
    console.log('is not date')
    throw new Error('Invalid data!');
  }
  if (!(date instanceof Date)){
    console.log('is not instance')
    date = new Date(date)
  }
  if (isNaN(date)){
    console.log('is not nan & instance of')
    throw new Error('Invalid data!');
  }
  let month = date.getMonth();
  console.log(` month ${month}`)
  if (month <= 1 || month === 11){
    return 'winter';
  }else if (month > 1 && month <= 4){
    return 'spring';
  }else if(month > 4 && month <= 7){
    return 'summer';
  }else{
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
