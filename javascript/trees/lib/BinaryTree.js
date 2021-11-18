'use strict';

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

}

module.exports = BinaryTree;
