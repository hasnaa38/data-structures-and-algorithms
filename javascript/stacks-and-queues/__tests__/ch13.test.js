'use strict';

const validateBrackets = require('../lib/bracketsValidator');

describe('Testing Brackets Validator Function', ()=>{
  test('returns false for an empty string inputs', ()=>{
    expect(validateBrackets('')).toBe(false);
  });
  test('returns false for a string input with no brackets', ()=>{
    expect(validateBrackets('hello')).toBe(false);
  });
  test('returns true for matching ordered brackets', ()=>{
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
  });
  test('returns true for concatenated matching brackets', ()=>{
    expect(validateBrackets('(){}[[]]')).toBe(true);
  });
  test('returns true for concatenated matching brackets with text in between', ()=>{
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });
  test('returns false for unmatched opening remaining.', ()=>{
    expect(validateBrackets('{')).toBe(false);
  });
  test('returns false for a closing arrived without corresponding opening.', ()=>{
    expect(validateBrackets(')')).toBe(false);
  });
  test('returns false for a closing  that does not match opening', ()=>{
    expect(validateBrackets('{)')).toBe(false);
  });
  test('returns false for unmatched concatenated brackets - either with or without text', ()=>{
    expect(validateBrackets('{(})')).toBe(false);
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(]hi(')).toBe(false);
  });
});
