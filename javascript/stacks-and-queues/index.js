'use strict';

const PseudoQueue = require('./lib/pseudo-queue');

function doWork(){
  let newQueue = new PseudoQueue();
  newQueue.enqueue(1);
  newQueue.enqueue(2);
  console.log(newQueue.dequeue());
  console.log(newQueue.dequeue());
  console.log(newQueue.dequeue());

}

module.exports = doWork;
