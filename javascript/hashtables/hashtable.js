'use strict';

let LinkedList = require('../linked-list/lib/LinkedList');

class HashTable{
  constructor(size){
    this.size = size;
    this.hashTable = new Array(size);
  }

  hash(key){
    let charSum = key.split('').reduce((acc, current) => acc+current.charCodeAt(0), 0);
    let multipliedByPrime = charSum * 599;
    return multipliedByPrime % this.size;
  }

  add(key, value){
    let entry  = {
      [key]: value
    };
    let index = this.hash(key);
    if(!this.hashTable[index]){
      this.hashTable[index] = new LinkedList();
    }
    this.hashTable[index].append(entry);
  }

  get(key){
    let index = this.hash(key); // the bucket i should be in
    if(!this.hashTable[index]){
      return null;
    }
    let currentEntry = this.hashTable[index].head; // the first node in the bucket
    do {
      if (Object.keys(currentEntry.value)[0] === key){
        return currentEntry.value;
      }
      currentEntry = currentEntry.next;
    } while (currentEntry);
    return null;
  }

  contains(key){
    let index = this.hash(key);
    if(!this.hashTable[index]){
      return false;
    }
    let currentEntry = this.hashTable[index].head;
    do{
      if(Object.keys(currentEntry.value)[0] === key){
        return true;
      }
      currentEntry = currentEntry.next;
    } while (currentEntry);
    return false;
  }

}

module.exports = HashTable;
