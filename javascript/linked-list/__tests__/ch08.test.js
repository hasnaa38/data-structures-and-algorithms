'use strict';

const LinkedList = require('../lib/LinkedList');

describe('Linked list challenge 08 testing', () => {
  it('1. Can handle empty list inputs', () => {
    let testing1 = new LinkedList();
    let testing2 = new LinkedList();
    expect(testing1.zipLists(testing1, testing2)).toBe('inputs contain empty lists');
  });
  it('2. Can successfully zip lists of length 1', () => {
    let testing1 = new LinkedList();
    let testing2 = new LinkedList();
    testing1.append(1);
    testing2.append(100);
    expect(testing1.zipLists(testing1, testing2)).toBe('head -> 1 -> 100 -> NULL');
  });
  it('3. Can successfully zip lists sharing the same length', () => {
    let testing1 = new LinkedList();
    let testing2 = new LinkedList();
    testing1.append(1);
    testing2.append(100);
    testing1.append(2);
    testing2.append(200);
    expect(testing1.zipLists(testing1, testing2)).toBe('head -> 1 -> 100 -> 2 -> 200 -> NULL');
  });
  it('4. Can successfully zip lists of different lengths - list 1', () => {
    let testing1 = new LinkedList();
    let testing2 = new LinkedList();
    testing1.append(1);
    testing2.append(100);
    testing1.append(2);
    testing1.append(3);
    expect(testing1.zipLists(testing1, testing2)).toBe('head -> 1 -> 100 -> 2 -> 3 -> NULL');
  });
  it('5. Can successfully zip lists of different lengths - list 2', () => {
    let testing1 = new LinkedList();
    let testing2 = new LinkedList();
    testing1.append(1);
    testing1.append(2);
    testing1.append(3);
    testing2.append(100);
    testing2.append(200);
    testing2.append(300);
    testing2.append(400);
    testing2.append(500);
    expect(testing1.zipLists(testing1, testing2)).toBe('head -> 1 -> 100 -> 2 -> 200 -> 3 -> 300 -> 400 -> 500 -> NULL');
  });
});
