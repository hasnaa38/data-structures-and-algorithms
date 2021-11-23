'use strict';

let {Node, KaryTree, fizzBuzz} = require('../lib/KaryTree');

describe('Testing FizzBuzz Method for K-ary Trees', () => {
  let node7 = new Node(15);
  let node6 = new Node(60);
  let node5 = new Node(5);
  let node4 = new Node(4);
  let node3 = new Node(3);
  let node2 = new Node(2, [node6, node7]);
  let node1 = new Node(1, [node2, node3, node4, node5]);
  let myTree = new KaryTree(node1);
  it('can return expected results -> nodeValue is divisible by 3: \'Fizz\', nodeValue is divisible by 5: \'Buzz\', nodeValue is divisible by both: \'FizzBuzz\', non of the cases: \'nodeValue\'', () => {
    expect(fizzBuzz(myTree)).toStrictEqual([ '1', '2', 'Fizz', '4', 'Buzz', 'FizzBuzz', 'FizzBuzz' ]);
  });
  it('can return null if the input tree was empty', ()=>{
    let myNewTree = new KaryTree();
    expect(fizzBuzz(myNewTree)).toBe(null);
  });
});
