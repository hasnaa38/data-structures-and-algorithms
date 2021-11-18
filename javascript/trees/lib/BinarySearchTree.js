'use strict';

// const BinaryTree = require('./BinaryTree');

class BinarySearchTree {
  constructor(root=null){
    this.root = root;
  }

  // Inserting a new node - stage 1 - to initiate a new tree
  insert(newNode){
    if(!this.root){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    // return this.BinarySearchTree;
  }
  // Inserting a new node - stage 2 - adding a node to an already existing tree in the correct location
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

  // Checking if the node exists
  contains(value){
    if(!this.root){
      return 'empty tree';
    } else {
      return this.containsValue(this.root, value);
    }
  }
  containsValue(node, value){
    if(value<node.value){
      this.containsValue(node.left, value);
    } else if(value>node.value) {
      this.containsValue(node.right, value);
    } else {
      return true;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
