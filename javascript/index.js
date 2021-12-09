'use strict';

let HashTable = require('./hashtables/hashtable');
let myHashTable = new HashTable(20);

// console.log('hasnaa ', myHashTable.hash('hasnaa'));
// console.log('aseel ', myHashTable.hash('aseel'));
// console.log('samar: ', myHashTable.hash('samar'));
// console.log('sarah: ', myHashTable.hash('sarah'));

/*
hasnaa  0
aseel  0
samar:  0
sarah:  1
*/
console.log('HERE ->>>>', myHashTable.hash('test'));
console.log('HERE ->>>>', myHashTable.hash('hello'));
console.log('HERE ->>>>', myHashTable.hash('tetsing'));
console.log('HERE ->>>>', myHashTable.hash('life'));
console.log('HERE ->>>>', myHashTable.hash('trying'));
console.log('HERE ->>>>', myHashTable.hash('code'));
console.log('HERE ->>>>', myHashTable.hash('edoc'));
// myHashTable.add('hasnaa', 'lucky');
// myHashTable.add('aseel', 'lucky');
// myHashTable.add('samar', 'lucky');
// myHashTable.add('sarah', 'lucky');
// console.log(myHashTable.get('hasnaa'));
// console.log(myHashTable.get('sarah'));
// console.log(myHashTable.get('samar'));
// console.log(myHashTable.get('aseel'));
// console.log(myHashTable.contains('aseel'));
// console.log(myHashTable.contains('sarah'));
// console.log(myHashTable.contains('samar'));
// console.log(myHashTable.contains('hasnaa'));
// console.log(myHashTable.contains('fatima'));
// console.log(myHashTable);
// console.log(myHashTable.hashTable[0]);


// let key = 'hasnaa';
// let charSum = key.split('').reduce((acc, current) => acc+current.charCodeAt(0), 0);
// console.log('charSum ', charSum);
// let multipliedByPrime = charSum * 599;
// console.log('multipliedByPrime ', multipliedByPrime);
// let final = multipliedByPrime / 20;
// console.log('final ',final );
