'use strict';

const Node = require('./Node');

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // adding nodes to the queue:
  enqueue(value){
    let newNode = new Node(value);
    if(this.isEmpty()){
      console.log('initiating empty queue');
      this.front = newNode;
      this.rear = newNode;
      this.length = this.length + 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length = this.length + 1;
    }
    return this.rear.value;
  }

  // removing nodes from the queue:
  dequeue(){
    if(this.isEmpty()){
      console.log('empty queue! you can\'t pop');
      return false;
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length = this.length - 1;
    if(!this.length){
      return 'empty queue';
    }
    return this.front.value;
  }

  // checking the queue's top value
  peek(){
    if(this.isEmpty()){
      console.log('empty queue');
      return false;
    }
    return this.front.value;
  }

  // checking wether a queue is empty or not:
  isEmpty(){
    return this.length === 0;
  }
}
module.exports = Queue;
