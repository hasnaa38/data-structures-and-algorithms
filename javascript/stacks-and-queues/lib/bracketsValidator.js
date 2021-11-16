'use strict';

const Stack = require('./Stack');
const bracketsStack = new Stack();

function validateBrackets(string){
  // a-zA-Z to remove all letters, \s to remove white space
  let stringArray = string.replace(/[a-zA-Z\s]/g, '').split('');
  if(!stringArray.length){return false;}
  stringArray.map(char => {
    if(char === '(' || char === '[' || char === '{'){
      bracketsStack.push(char);
    } else if(char === ')'){
      bracketsStack.top.value === '(' ? bracketsStack.pop() : null;
    } else if(char === ']'){
      bracketsStack.top.value === '[' ? bracketsStack.pop() : null;
    } else if(char === '}'){
      bracketsStack.top.value === '{' ? bracketsStack.pop() : null;
    }
  });
  if(bracketsStack.isEmpty()){
    return true;
  }
  return false;
}
module.exports = validateBrackets;
