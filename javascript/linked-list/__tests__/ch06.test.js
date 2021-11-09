'use strict';

const LinkedList = require('../lib/LinkedList');
let testingList = new LinkedList();

describe('Linked list lib tetsing', () => {
  it('1. Can successfully add a node to the end of the linked list', () => {
    testingList.append(1);
    testingList.append(2);
    testingList.append(3);
    expect(testingList.tail.value).toBe(3);
    expect(testingList.tail.next).toBeNull();
  });
  it('2. Can successfully add multiple nodes to the end of a linked list', () => {
    testingList.append(4);
    console.log(testingList.toString());
    expect(testingList.tail.value).toBe(4);
    expect(testingList.tail.next).toBeNull();
  });
  it('3. Can successfully insert a node before a node located i the middle of a linked list', () => {
    testingList.insertBefore(3, 8);
    expect(testingList.toString()).toBe('{ 1 } -> { 2 } -> { 8 } -> { 3 } -> { 4 } -> NULL');
  });
  it('4. Can successfully insert a node before the first node of a linked list', () => {
    testingList.insertBefore(1, 8);
    expect(testingList.toString()).toBe('{ 8 } -> { 1 } -> { 2 } -> { 8 } -> { 3 } -> { 4 } -> NULL');
  });
  it('5. Can successfully insert after a node in the middle of the linked list', () => {
    testingList.insertAfter(3, 8);
    expect(testingList.toString()).toBe('{ 8 } -> { 1 } -> { 2 } -> { 8 } -> { 3 } -> { 8 } -> { 4 } -> NULL');
  });
  it('6. Can successfully insert a node after the last node of the linked list', () => {
    testingList.insertAfter(4, 8);
    expect(testingList.toString()).toBe('{ 8 } -> { 1 } -> { 2 } -> { 8 } -> { 3 } -> { 8 } -> { 4 } -> { 8 } -> NULL');
  });
});
