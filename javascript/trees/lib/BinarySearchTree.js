'use strict';

const BinaryTree = require('./BinaryTree');

class BinarySearchTree extends BinaryTree{
  constructor(root){
    this.root = root;
  }

  // insertNode(node){
  //   if(!this.root){
  //     this.root = node;
  //     return;
  //   } else {

  //   }
  // }
  insertNode(node, newNode){
  if(node.value < newNode.value){
    if(!node.left){
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if(!node.right){
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

}

module.exports = BinarySearchTree;
