'use strict';

const Stack = require('./lib/Stack');
const Queue = require('./lib/Queue');

function doWork(){
  let stack = new Stack;
  let queue = new Queue;
  queue.enqueue(1);
  queue.enqueue(2);
}

module.exports = doWork;
