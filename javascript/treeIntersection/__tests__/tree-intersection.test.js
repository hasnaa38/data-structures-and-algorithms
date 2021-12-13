'use strict';

let Node = require('../../trees/lib/Node');
let BinaryTree = require('../../trees/lib/BinaryTree');
let tree_intersection = require('../tree-intersection');

describe('testing the tree_intersection function', () => {
  it('returns an array of all the repeated node values in both trees', () => {
    let node7 = new Node(7);
    let node6 = new Node(6);
    let node5 = new Node(5);
    let node4 = new Node(4);
    let node3 = new Node(3, node6, node7);
    let node2 = new Node(2, node4, node5);
    let rootNode1 = new Node(1, node2, node3);
    let myTree1 = new BinaryTree(rootNode1);
    let hnode7 = new Node(7);
    let hnode6 = new Node(20);
    let hnode5 = new Node(50);
    let hnode4 = new Node(4);
    let hnode3 = new Node(1, hnode6, hnode7);
    let hnode2 = new Node(9, hnode4, hnode5);
    let rootNode2 = new Node(8, hnode2, hnode3);
    let myTree2 = new BinaryTree(rootNode2);
    expect(tree_intersection(myTree1, myTree2)).toStrictEqual([ 4, 1, 7 ]);
  });
  it('returns an empty array if no elements were repeated', () => {
    let node7 = new Node(7);
    let node6 = new Node(6);
    let node5 = new Node(5);
    let node4 = new Node(4);
    let node3 = new Node(3, node6, node7);
    let node2 = new Node(2, node4, node5);
    let rootNode1 = new Node(1, node2, node3);
    let myTree1 = new BinaryTree(rootNode1);
    let hnode7 = new Node(70);
    let hnode6 = new Node(20);
    let hnode5 = new Node(50);
    let hnode4 = new Node(40);
    let hnode3 = new Node(10, hnode6, hnode7);
    let hnode2 = new Node(9, hnode4, hnode5);
    let rootNode2 = new Node(8, hnode2, hnode3);
    let myTree2 = new BinaryTree(rootNode2);
    expect(tree_intersection(myTree1, myTree2)).toStrictEqual([]);
  });
  it('returns null if any of the function arguments was not a tree', () => {
    let test1 = 3;
    let test2 = 'hello';
    expect(tree_intersection(test1, test2)).toBe(null);
  });
});
