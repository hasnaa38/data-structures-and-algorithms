'use strict';

const Stack = require('./Stack');

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.length = 0;
  }

  enqueue(value){
    if(this.stack2.length>0){
      let iterations = this.stack2.length;
      for(let i=0; i<iterations; i++){
        this.stack1.push(this.stack2.pop());
      }
    }
    this.length = this.stack1.length + 1;
    this.stack1.push(value);
  }

  dequeue(){
    // I will take all the values from stack 1
    let iterations = this.stack1.length;
    for(let i=0; i<iterations; i++){
      this.stack2.push(this.stack1.pop());
    }
    this.length = this.stack2.length - 1;
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
