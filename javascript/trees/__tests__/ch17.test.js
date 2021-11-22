'use strict';

const Node = require('../lib/Node');
const BinaryTree = require('../lib/BinaryTree');

describe('Testing Breadth First Traversal for Binary Trees', () => {
  let balancedBT = new BinaryTree();
  let unbalancedBT = new BinaryTree();
  // balanced:
  let node5 = new Node(5);
  let node4 = new Node(4);
  let node6 = new Node(6);
  let node7 = new Node(7);
  let node2 = new Node(2, node4, node5);
  let node3 = new Node(3, node6, node7);
  let rootNode = new Node(1, node2, node3);
  balancedBT.root = rootNode;
  // unbalanced:
  let node8u = new Node(4);
  let node7u = new Node(9, node8u, null);
  let node2u = new Node(7);
  let node3u = new Node(5, null, node7u);
  unbalancedBT.root = new Node(2, node2u, node3u);
  it('Can successfully return a collection from a breadth-first traversal for a balanced tree', () => {
    expect(balancedBT.breadth()).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('Can successfully return a collection from a breadth-first traversal for an unbalanced tree', () => {
    expect(unbalancedBT.breadth()).toStrictEqual([2, 7, 5, 9, 4]);
  });
});
