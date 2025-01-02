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
  let result;
  let month;
  if (date === undefined) {
    result = 'Unable to determine the time of year!';
  }
  else {
    try {
      month = date.getMonth();
    }
    catch (error) {
      return 'Invalid date!';
    }
  const index = String(month);
  switch (index) {
    case '0':
      result = 'winter';
      break;
    case '1':
      result = 'winter';
      break;
    case '2':
      result = 'spring';
      break;
    case '3':
      result = 'spring';
      break;
    case '4':
      result = 'spring';
      break;
    case '5':
      result = 'summer';
      break;
    case '6':
      result = 'summer';
      break;
    case '7':
      result = 'summer';
      break;
    case '8':
      result = 'autumn';
      break;
    case '9':
      result = 'autumn';
      break;
    case '10':
      result = 'autumn';
      break;
    case '11':
      result = 'winter';
      break;
    default:
      result = 'Unable to determine the time of year!';
  }
}
 return result;
}

module.exports = {
  getSeason
};
