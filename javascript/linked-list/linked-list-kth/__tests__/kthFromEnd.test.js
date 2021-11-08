const LinkedList = require('../lib/LinkedList');
let testingList = new LinkedList();

describe('Testing the kthFromEnd method', () => {
  it('1. Can successfully append values to the list', () => {
    testingList.append(1);
    testingList.append(10);
    testingList.append(100);
    testingList.append(1000);
    expect(testingList.tail.value).toBe(1000);
    expect(testingList.tail.next).toBeNull();
  });
  it('2. <<Happy Scenario>> Can successfully backwards return a node in the middle', () => {
    // List: head -> {1} -> {10} -> {100} -> {1000} -> X
    // argument = 2, should return 10
    let testResult = testingList.kthFromEnd(2);
    expect(testResult).toBe(10);
  });
  it('3. Can successfully backwards return a node for a single node list', () => {
    let newTestingList = new LinkedList();
    newTestingList.append('the only element');
    expect(newTestingList.kthFromEnd(0)).toBe('the only element');
  });
  it('4. Addresses if k is not a positive integer', () => {
    expect(testingList.kthFromEnd('hi')).toBe('k must be a positive integer');
  });
  it('5. Addresses if k and the length of the list are the same', () => {
    expect(testingList.kthFromEnd(4)).toBe('k = length');
  });
  it('6. Addresses if k is greater than the length of the linked list', () => {
    expect(testingList.kthFromEnd(6)).toBe('k > length');
  });
});
