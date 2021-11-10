'use strict';

const LinkedList = require('./lib/LinkedList.js');

function doWork() {
  let list = new LinkedList;
  list.append('m');
  console.log(list.isPalindrome());
}

module.exports = doWork;
