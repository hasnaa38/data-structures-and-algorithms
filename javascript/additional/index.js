'use strict';

const Queue = require('../stacks-and-queues/lib/Queue');

function DuckDuckGoose(array, k){
  if(!k) return 'k can\'t be 0';
  let newQueue = new Queue();
  // enqueue the strings to the first queue
  for(let i=0; i<array.length; i++){
    newQueue.enqueue(array[i]);
  }
  // pop and push from 0 to k, when you reach index k -> pop k and don't push it, then restart:
  while(newQueue.length>1){
    for(let i=1; i<k; i++){
      newQueue.enqueue(newQueue.dequeue());
    }
    newQueue.dequeue();
  }
  return `${newQueue.peek()} wins!`;
}

module.exports = DuckDuckGoose;
