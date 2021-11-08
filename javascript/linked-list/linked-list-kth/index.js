'use strict';

const LinkedList = require('./lib/LinkedList');

function doWork3() {
  const linkedList = new LinkedList();
  console.log(linkedList.kthFromEnd(2)); // empty
  linkedList.append(1);
  linkedList.append(10);
  linkedList.append(100);
  linkedList.append(1000);
  linkedList.append(10000);
  console.log(linkedList.kthFromEnd(0)); // tail
  console.log(linkedList.kthFromEnd(1)); // normal
  console.log(linkedList.kthFromEnd(4)); // head
  console.log(linkedList.kthFromEnd(5)); // arg is higher
  console.log(linkedList.kthFromEnd('hi'));
}

module.exports = doWork3;
