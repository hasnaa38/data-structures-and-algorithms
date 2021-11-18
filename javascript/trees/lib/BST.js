'use strict';

const Node = require('./Node');

class BST{
  constructor(root=null){
    this.root = root;
  }
  insert(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
    }
    let _recursiveFun = (newNode, node) => {
      if(newNode.value < node.value){
        if(!node.left){
          node.left = newNode;
        } else {
          _recursiveFun(newNode, node.left);
        }
      } else if (newNode.value > node.value){
        if(!node.right){
          node.right = newNode;
        } else {
          _recursiveFun(newNode, node.right);
        }
      }
    };
    _recursiveFun(newNode, this.root);
    return this;
  }
}

module.exports = BST;
