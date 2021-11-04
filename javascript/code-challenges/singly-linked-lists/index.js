'use strict';

const LinkedList = require('./lib/LinkedList');

function doWork() {
// Creating a new empty LL:
  const linkedList = new LinkedList();

  // Appending nodes to the LL:
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insert(5);
  console.log(linkedList.includes(2)); // true
  console.log(linkedList.includes(8)); // false
  console.log(linkedList.toString());

  const linkedList2 = new LinkedList(); // empty linked list
  console.log(linkedList2.includes(2)); // false
  console.log(linkedList2.toString()); // empty list
}

module.exports = doWork;

