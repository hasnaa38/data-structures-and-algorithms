'use strict';

const HashTable = require('./hashtable');

function repeatedWord(sentence){
  if(typeof sentence !== 'string') return null;
  let sentenceArray = sentence.split(' ');
  let sentenceHT = new HashTable(sentenceArray.length);
  let repeatedWords = [];
  sentenceArray.map(currentWord => {
    let word = currentWord.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if(sentenceHT.contains(word)){
      repeatedWords.push(word);
    }
    sentenceHT.add(word, word);
  });
  return repeatedWords[0] ? repeatedWords[0] : null;
}

module.exports = repeatedWord;
