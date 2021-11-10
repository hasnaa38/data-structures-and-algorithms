'use strict';

const LinkedList = require('../lib/LinkedList');
let testingList = new LinkedList();

describe('Linked list challenge 09 testing', () => {
  it('1. Can handle empty list inputs', () => {
    expect(testingList.isPalindrome()).toBe('empty list!');
  });
  it('2. Can handle single node lists', () => {
    testingList.append('h');
    console.log(testingList.toString());
    console.log(testingList.isPalindrome());
    expect(testingList.isPalindrome()).toBe(true);
  });
  it('3. Returns false if the list is not palindrome', () => {
    testingList.append('a');
    console.log(testingList.toString());
    console.log(testingList.isPalindrome());
    expect(testingList.isPalindrome()).toBe(false);
  });
  it('4. Can handle odd length palindrome lists', () => {
    testingList.append('h');
    console.log(testingList.toString());
    console.log(testingList.isPalindrome());
    expect(testingList.isPalindrome()).toBe(true);
  });
  it('5. Can handle even length palindrome lists', () => {
    let testingList2 = new LinkedList();
    testingList2.append('h');
    testingList2.append('a');
    testingList2.append('a');
    testingList2.append('h');
    console.log(testingList2.toString());
    console.log(testingList.isPalindrome());
    expect(testingList2.isPalindrome()).toBe(true);
  });
});
