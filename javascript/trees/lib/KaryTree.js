'use strict';

const Queue = require('../../stacks-and-queues/lib/Queue');

class Node{
  constructor(value, children=[]){
    this.value = value;
    this.children = children;
  }
}

class KaryTree{
  constructor(root=null){
    this.root = root;
  }

  bft(){
    let result = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while(!queue.isEmpty()){
      let currentNode = queue.dequeue1();
      result.push(currentNode.value);
      for(let i=0; i<currentNode.children.length; i++){
        queue.enqueue(currentNode.children[i]);
      }
    }
    return result;
  }
}

function fizzBuzz(tree){
  if(!tree.root){
    return null;
  }
  let treeNodes = tree.bft();
  for(let i=0; i<treeNodes.length; i++){
    if(treeNodes[i]%3===0 && treeNodes[i]%5===0){
      treeNodes[i] = 'FizzBuzz';
    } else if(treeNodes[i]%3===0){
      treeNodes[i] = 'Fizz';
    } else if(treeNodes[i]%5===0){
      treeNodes[i] = 'Buzz';
    } else {
      treeNodes[i] = `${treeNodes[i]}`;
    }
  }
  return treeNodes;
}

module.exports = {
  Node,
  KaryTree,
  fizzBuzz
};
