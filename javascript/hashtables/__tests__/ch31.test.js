'use strict';

let {repeatedWord} = require('../functions');

describe('testing the repeated word function', ()=>{
  test('returns the first repeated word in a string input', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who')).toBe('a');
  });
  test('returns the first repeated word in a string input even if the repeated word has different upper/lower case letters', () => {
    expect(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only')).toBe('it');
  });
  test('returns the first repeated word in a string input even if the repeated word has punctuations', () => {
    expect(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York')).toBe('summer');
  });
  test('returns null if there were no repeated words / single word input', () => {
    expect(repeatedWord('who are you')).toBe(null);
    expect(repeatedWord('who')).toBe(null);
  });
  test('returns null if the input was not a string', () => {
    expect(repeatedWord(8)).toBe(null);
  });
});
