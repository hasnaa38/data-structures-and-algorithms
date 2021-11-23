'use strict';

let {Node, KaryTree, fizzBuzz} = require('./lib/KaryTree');

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
  let node7 = new Node(15);
  let node6 = new Node(6);
  let node5 = new Node(5);
  let node4 = new Node(4);
  let node3 = new Node(30);
  let node2 = new Node(2, [node6, node7]);
  let node1 = new Node(1, [node2, node3, node4, node5]);
  let myTree = new KaryTree(node1);
  // console.log(myTree);

  console.log(fizzBuzz(myTree));
}

module.exports = doWork;
