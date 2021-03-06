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

function mostCommon(string){
  let stringArray = string.split(' ');
  let myHashTable = new HashTable(stringArray.length);
  let mostRepeated = null;
  stringArray.map(element => {
    let word = element.toLowerCase();
    let max = 0;
    let tempValue;
    if(myHashTable.contains(word)){
      tempValue = myHashTable.get(word)[word]+1;
      if(tempValue > max){
        max = tempValue;
        mostRepeated = word;
      }
      myHashTable.add(word, tempValue);
    } else {
      myHashTable.add(word, 1);
    }
  });
  return mostRepeated;
}

module.exports = {repeatedWord, leftJoin, mostCommon};
