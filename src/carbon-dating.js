const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let res;
  if (typeof sampleActivity !== 'string') res = false;
  else {
    const numActiv = Number(sampleActivity);
    if (isNaN(numActiv) || numActiv < 1 || numActiv > 15) {
      res = false;
    }
    else {
      const a = (Math.log(MODERN_ACTIVITY) - Math.log(numActiv)) / Math.log(2);
      res = Math.ceil(a * HALF_LIFE_PERIOD);
    }
  }
  return res;
}

module.exports = {
  dateSample
};
