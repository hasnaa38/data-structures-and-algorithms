'use strict';

let Node = require('../lib/Node');
let BinaryTree = require('../lib/BinaryTree');
let BinarySearchTree = require('../lib/BinarySearchTree');

describe('Testing Trees - Binary and Binary Search Trees', ()=>{
  let BT = new BinaryTree();
  let BST = new BinarySearchTree();
  test('> Can successfully instantiate an empty tree - BT and BST', ()=>{
    expect(BT.root).toBe(null);
    expect(BST.root).toBe(null);
  });
  test('> Can successfully instantiate a tree with a single root node - BT and BST', ()=>{
    let node1 = new Node(1);
    BT.root = node1;
    expect(BT.root.value).toBe(1);
    expect(BT.root.right).toBe(null);
    expect(BT.root.left).toBe(null);
    BST.add(50);
    expect(BST.root.value).toBe(50);
  });
  test('> Can successfully add a left child and right child to a single root node', ()=>{
    BT.root.left= new Node(2);
    BT.root.right = new Node(3);
    expect(BT.root.left.value).toBe(2);
    expect(BT.root.right.value).toBe(3);
  });
  test('> Can successfully return a collection from a pre-order traversal', ()=>{
    BT.root.left.left = new Node(4);
    BT.root.left.right = new Node(5);
    BT.root.right.left = new Node(6);
    BT.root.right.right = new Node(7);
    expect(BT.preOrder()).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test('> Can successfully return a collection from an in-order traversal', ()=>{
    expect(BT.inOrder()).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  test('> Can successfully return a collection from a post-order traversal', ()=>{
    expect(BT.postOrder()).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
  });
  test('> Can insert a node to a binary search tree', ()=>{
    BST.add(1);
    BST.add(60);
    expect(BST.preOrder()).toStrictEqual([50, 1, 60]);
  });
  test('> Can return if a value exists in a binary search tree or not', ()=>{
    expect(BST.contains(50)).toBe(true);
    expect(BST.contains(8)).toBe(false);
  });
});
