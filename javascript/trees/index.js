'use strict';

let Node = require('./lib/Node');
let BinaryTree = require('./lib/BinaryTree');
let BST = require('./lib/BinarySearchTree');

// function doWork(){
//   let node1 = new Node(50);
//   let node2 = new Node(2);
//   let node3 = new Node(38);
//   let node4 = new Node(83);
//   let node5 = new Node(15);
//   let node6 = new Node(0);
//   let node7 = new Node(24);
//   node1.left = node2;
//   node1.right = node5;
//   node2.left = node3;
//   node2.right = node4;
//   node5.left = node6;
//   node5.right = node7;

//   let tree = new BinaryTree();
//   tree.root = node1;
//   // console.log(tree.postOrder());
//   console.log(tree.max1());
//   console.log(tree.max2());
//   console.log(tree.min());

// }

function doWork(){
  // let newTree = new BST();
  // newTree.add(15);
  // newTree.add(3);
  // newTree.add(36);
  // newTree.add(12);
  // newTree.add(2);
  // newTree.add(28);
  // newTree.add(39);
  // // console.log(newTree);
  // console.log(newTree.max());
  // console.log(newTree.min());

  let newBT = new BinaryTree();
  let node10 = new Node(5);
  let node11 = new Node(11);
  let node4 = new Node(2);
  let node5 = new Node(6, node10, node11);
  let node8 = new Node(4);
  let node7 = new Node(9, node8, null);
  let node2 = new Node(7, node4, node5);
  let node3 = new Node(5, null, node7);
  newBT.root = new Node(2, node2, node3);
  // console.log(newBT.preOrder());
  console.log(newBT.breadth());
}

module.exports = doWork;
