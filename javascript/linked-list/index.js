'use strict';

const LinkedList = require('./lib/LinkedList.js');

function doWork() {
  let testingList1 = new LinkedList();
  let testingList2 = new LinkedList();
  testingList1.append(1);
  testingList1.append(2);
  testingList2.append(100);
  testingList2.append(200);
  testingList1.append(3);
  let hi = testingList1.zipLists(testingList1, testingList2);
  console.log(hi);
  console.log(hi === 'head -> 1 -> 100 -> 2 -> 200 -> 3 -> NULL');
}

module.exports = doWork;
