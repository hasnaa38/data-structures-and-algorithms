'use strict';

const Node = require('./Node');
const BinaryTree = require('./BinaryTree');

class BinarySearchTree extends BinaryTree{
  constructor(root=null){
    super(root);
    this.size = 0;
  }

  size(){
    return this.size;
  }

  add(value){
    this.size++;
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return;
    } else {
      let _searchTree = (node) => {
        if(value < node.value){
          if(!node.left){
            node.left = newNode; // if the node has no left (nothing less than it), add it here
            return;
          } else {
            return _searchTree(node.left);
          }
        } else if(value > node.value){
          if(!node.right){
            node.right = newNode;
            return;
          } else {
            return _searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return _searchTree(this.root);
    }
  }

  contains(value){
    let node = this.root;
    while(node){
      if(value === node.value){
        return true;
      } else if(value < node.value){
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  max(){
    if(this.isEmpty()){
      return null;
    }
    let maxValue;
    let _recursiveFun = (node) => {
      if(node.right){
        _recursiveFun(node.right);
      } else {
        maxValue = node.value;
      }
    };
    _recursiveFun(this.root);
    return maxValue;
  }

  min(){
    if(this.isEmpty()){
      return null;
    }
    let currentNode = this.root;
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  isEmpty(){
    if(!this.root){
      return true;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
