'use strict';

// function called tree_intersection that takes two binary trees and returns a map of the elements in both

const HashTable = require('../hashtables/hashtable');

function tree_intersection(tree1, tree2){
  if(typeof tree1 !== 'object' || typeof tree2 !== 'object' || !tree1.root || !tree2.root){
    return null;
  }
  let tree1Elements = tree1.preOrder();
  let tree2Elements = tree2.preOrder();
  let size = tree1Elements.length > tree2Elements.length ? tree1Elements.length : tree2Elements.length;
  let hashTable = new HashTable(size);
  let result = [];
  tree1Elements.map(element => {
    hashTable.add(`${element}${element}`, element);
  });
  tree2Elements.map(element => {
    if(hashTable.contains(`${element}${element}`)){
      result.push(element);
    }
  });
  return result;
}

module.exports = tree_intersection;
