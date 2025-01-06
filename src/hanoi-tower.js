const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 0;
  function towerOfHanoi(n, start, target, end) {
    if (n > 0) {
      towerOfHanoi(n - 1, start, end, target);
      count += 1;
      towerOfHanoi(n - 1, end, target, start);
    }
  }
  towerOfHanoi(disksNumber, 'start', 'target', 'end');
  const a = count * 3600;
  const seconds = Math.floor(a / turnsSpeed);
  const obj = {};
  obj.turns = count;
  obj.seconds = seconds;
  return obj;
}

module.exports = {
  calculateHanoi
};
