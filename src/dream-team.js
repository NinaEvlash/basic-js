const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res;
  if (!Array.isArray(members)) res = false;
  else {
    let nameArr = [];
    let nameStrArr = [];
    for (let i = 0; i < members.length; i += 1) {
      if (typeof members[i] === 'string') nameArr.push(members[i].trimStart());
    }
    if (nameArr.length === 0) res = false;
    else {
      for (let i = 0; i < nameArr.length; i += 1) {
        nameStrArr.push(nameArr[i].charAt(0));
      }
      const sorted = nameStrArr.sort((a, b) => a.localeCompare(b));
      res = sorted.join('').toUpperCase();
    }
  }
  return res;
}

module.exports = {
  createDreamTeam
};
