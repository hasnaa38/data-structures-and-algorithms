'use strict';

const Node = require('./Node');

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  // To append a value to the end of the linked list using the tail property
  append(value){
    // 1- Create a new node
    const newNode = new Node(value);
    // 2- append the new node
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    } else {
      this.tail.next = newNode; // the current tail is pointing to the new node
      this.tail = newNode; // making the new node become the new tail
    }
  }

  insertBefore(value, newValue){
    const newNode = new Node(newValue);
    let currentNode = this.head;
    if(this.head.value === value){
      newNode.next = currentNode;
      this.head = newNode;
      return;
    } else {
      while(currentNode.next){
        if(currentNode.next.value === value){
          newNode.next = currentNode.next; // shift the next one step to the right
          currentNode.next = newNode; // the current node is pointing to the previous value
          return;
        }
        currentNode = currentNode.next;
      }
    }
    return 'No change, method exception';
  }

  insertAfter(value, newValue){
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let appendingAfterFun = () => {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return;
    };
    while(currentNode.next){
      if(currentNode.value === value){
        appendingAfterFun();
      }
      currentNode = currentNode.next;
    }
    if(currentNode.value === value){ // the last node
      appendingAfterFun();
    }
    return 'No change, method exception';
  }

  toString(){
    if (!this.head){
      return 'empty linked list';
    }
    let finalString = '';
    let currentNode = this.head;
    while(currentNode.next){
      finalString = finalString + `{ ${currentNode.value } } -> `;
      currentNode = currentNode.next;
    }
    return finalString + `{ ${currentNode.value } } -> X`;
  }
}

module.exports = LinkedList;
