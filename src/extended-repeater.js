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
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = String(str);
  let repeatTimes;
  if (options.repeatTimes === undefined) {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  }
  let separator;
  if (options.separator === undefined) {
    separator = '+';
  } else {
    separator = options.separator;
  }
  let additionStr;
  if (options.addition === undefined) {
    additionStr = '';
  } else {
    additionStr = String(options.addition);
  }
  let additionRepeatTimes;
  if (options.additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  let additionSeparator;
  if (options.additionSeparator === undefined) {
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }
  const arrAddition = [];
  const arrAssociat = [];
  for (let i = 0; i < additionRepeatTimes; i += 1) {
    arrAddition.push(additionStr);
  }
  const strAdd = arrAddition.join(`${additionSeparator}`);
  const strAssociat = string + strAdd;
  for (let i = 0; i < repeatTimes; i += 1) {
    arrAssociat.push(strAssociat);
  }
  const result = arrAssociat.join(`${separator}`);
  return result;
}

module.exports = {
  repeater
};
