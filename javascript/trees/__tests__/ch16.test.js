'use strict';

const Node = require('../lib/Node');
const BinaryTree = require('../lib/BinaryTree');
const BinarySearchTree = require('../lib/BinarySearchTree');

describe('Binary Trees max/min node values', ()=>{

  let node3 = new Node(3);
  let node4 = new Node(4);
  let node6 = new Node(6);
  let node7 = new Node(7);
  let node2 = new Node(2, node3, node4);
  let node5 = new Node(5, node6, node7);
  let rootNode = new Node(1, node2, node5);
  let BT = new BinaryTree();
  BT.root = rootNode;

  let BST = new BinarySearchTree();
  BST.add(15);
  BST.add(3);
  BST.add(36);
  BST.add(12);
  BST.add(2);
  BST.add(28);
  BST.add(39);

  it('can return the max value in a binary tree- 2 ways tested', () => {
    expect(BT.max1()).toBe(7);
    expect(BT.max2()).toBe(7);
  });
  it('can return the min value in a binary tree', () => {
    let newNode = new Node(0);
    node6.left = newNode;
    expect(BT.min()).toBe(0);
  });
  it('can return the max value in a binary search tree- 2 ways tested', () => {
    expect(BST.max()).toBe(39);
  });
  it('can return the min value in a binary search tree', () => {
    expect(BST.min()).toBe(2);
  });

});
