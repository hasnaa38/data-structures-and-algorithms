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

  let node3 = new Node(38);
  let node4 = new Node(83);
  let node6 = new Node(0);
  let node7 = new Node(24);
  let node2 = new Node(2, node3, node4);
  let node5 = new Node(5, node6, node7);
  let rootNode = new Node(1, node2, node5);
  let BT = new BinaryTree();
  BT.root = rootNode;
  let newNode = new Node(2);
  node6.left = newNode;
  console.log(BT.preOrder());

}

module.exports = doWork;
