'use strict';

const validateBrackets = require('./lib/bracketsValidator');

function doWork(){
  console.log('{}', validateBrackets('{}'));
  console.log('{}(){}', validateBrackets('{}(){}'));
  console.log('()[[Extra Characters]]', validateBrackets('()[[Extra Characters]]'));
  console.log('(){}[[]]', validateBrackets('(){}[[]]'));
  console.log('{}{Code}[Fellows](())', validateBrackets('{}{Code}[Fellows](())'));
  console.log('[({}]', validateBrackets('[({}]'));
  console.log('(](', validateBrackets('(]('));
  console.log('{(})', validateBrackets('{(})'));
  console.log('{', validateBrackets('{'));
  console.log(')', validateBrackets(')'));
  console.log('[}', validateBrackets('[}'));
  console.log(validateBrackets(''));
  console.log(validateBrackets('hello'));
}

module.exports = doWork;
