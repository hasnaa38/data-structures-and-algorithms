'use strict';

let Node = require('./lib/Node');
let BinaryTree = require('./lib/BinaryTree');

function doWork(){
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);
  let node6 = new Node(6);
  let node7 = new Node(7);
  node1.left = node2;
  node1.right = node5;
  node2.left = node3;
  node2.right = node4;
  node5.left = node6;
  node5.right = node7;

  let tree = new BinaryTree();
  tree.root = node1;
  // console.log(tree.postOrder());
  console.log(tree.max1());
  console.log(tree.max2());
  console.log(tree.min());

}


module.exports = doWork;
