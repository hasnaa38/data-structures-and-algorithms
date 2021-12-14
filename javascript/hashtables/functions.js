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

function leftJoin(hashtable1, hashtable2){
  let result = [];
  for(let i=0; i<hashtable1.size; i++){
    if(hashtable1.hashTable[i].length > 1){
      return null;
    }
    let arbitraryResult = Object.entries(hashtable1.hashTable[i].head.value);
    let from2 = hashtable2.contains(arbitraryResult[0][0]) ? Object.values(hashtable2.get(arbitraryResult[0][0]))[0] : null;
    arbitraryResult[0].push(from2);
    result.push(arbitraryResult[0]);
  }
  return result;
}
module.exports = {repeatedWord, leftJoin};

// its an array of objects (linked lists) [ ] 
// the linked list has nodes in it
// linked list has a length, from here we will make sure that our table bucket has no collisions

// in the first array (table), reach the first element, and return it as [ key, value ]
// then go to the second table and check if it `contains(key)` -> if it does: [ key, value, value of table 2]
// [[0], [1], [2], [3]]
// return this array