'use strict';

const LinkedList = require('./lib/LinkedList');

function doWork2() {
// Creating a new empty LL:
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  console.log('original linked list:');
  console.log(linkedList.toString());
  linkedList.insertBefore(2, 80);
  console.log('insert before the 2:');
  console.log(linkedList.toString());
  linkedList.insertBefore(1, 800000);
  console.log('insert before the 1:');
  console.log(linkedList.toString());
  linkedList.insertAfter(2, 300);
  console.log('insert after the 2:');
  console.log(linkedList.toString());
  linkedList.insertAfter(3, 9999);
  console.log('insert after the 3:');
  console.log(linkedList.toString());

}

module.exports = doWork2;
