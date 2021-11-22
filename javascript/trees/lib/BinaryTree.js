'use strict';

const Node = require('./Node');
const Queue = require('../../stacks-and-queues/lib/Queue');

class BinaryTree{
  constructor(root=null){
    this.root = root;
  }

  // depth first traversals (returns an array of the values, ordered appropriately):

  // 1- pre-order: Root -> Left -> Right
  preOrder(){
    let preOrderNodes = [];
    let _recursiveFun = (node) => {
      preOrderNodes.push(node.value);
      if(node.left){
        _recursiveFun(node.left);
      }
      if(node.right){
        _recursiveFun(node.right);
      }
    };
    _recursiveFun(this.root);
    return preOrderNodes;
  }
  // 2- in-order: Left -> Root -> Right
  inOrder(){
    let inOrderNodes = [];
    let _recursiveFun = (node) => {
      if(node.left){
        _recursiveFun(node.left);
      }
      inOrderNodes.push(node.value);
      if(node.right){
        _recursiveFun(node.right);
      }
    };
    _recursiveFun(this.root);
    return inOrderNodes;
  }
  // 3- post-order: Left -> Right -> Root
  postOrder(){
    let postOrderNodes = [];
    let _recursiveFun = (node) => {
      if(node.left){
        _recursiveFun(node.left);
      }
      if(node.right){
        _recursiveFun(node.right);
      }
      postOrderNodes.push(node.value);
    };
    _recursiveFun(this.root);
    return postOrderNodes;
  }

  // find max and min
  max1(){
    if(!this.root){
      console.log('empty tree, no max');
      return null;
    }
    let maxValue = this.root.value;
    let _recursiveFun = node => {
      if(node.value > maxValue){
        maxValue = node.value;
      }
      if(node.left){
        _recursiveFun(node.left);
      }
      if(node.right){
        _recursiveFun(node.right);
      }
    };
    _recursiveFun(this.root);
    return maxValue;
  }

  max2(){
    let valuesArray = this.preOrder();
    return valuesArray.reduce((acc, value) => {
      acc = acc < value ? value : acc;
      return acc;
    }, 0);
  }

  min(){
    let valuesArray = this.preOrder();
    return valuesArray.reduce((acc, value) => {
      return acc > value ? value : acc;
    }, 1000000);
  }

  // breadth first traversals (returns an array of the values, ordered appropriately level by level):
  breadth(){
    if(!this.root){
      return null;
    }
    let result = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while(!queue.isEmpty()){
      let currentNode = queue.dequeue1();
      result.push(currentNode.value);
      if(currentNode.left){
        queue.enqueue(currentNode.left);
      }
      if(currentNode.right){
        queue.enqueue(currentNode.right);
      }
    }
    return result;
  }
}

module.exports = BinaryTree;
