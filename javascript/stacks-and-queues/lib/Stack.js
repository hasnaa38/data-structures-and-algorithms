'use strict';

const Node = require('./Node');

// note: node.next in stacks points to the previous value (the one below it)
class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }

  // adding nodes to the stack:
  push(value){
    let newNode = new Node(value);
    if(this.isEmpty()){
      console.log('initiating new stack');
      this.top = newNode;
      this.length = this.length + 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length = this.length + 1;
    }
    return this.top.value;
  }

  // removing nodes from the stack:
  pop(){
    if(this.isEmpty()){
      console.log('empty stack! you can\'t pop');
      return false;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length = this.length - 1;
    if(!this.length){
      return 'empty stack';
    }
    return this.top.value;
  }

  // checking the stack's top value
  peek(){
    if(this.isEmpty()){
      console.log('empty stack');
      return false;
    }
    return this.top.value;
  }

  // checking wether a stack is empty or not:
  isEmpty(){
    return this.top === null;
  }
}

module.exports = Stack;
