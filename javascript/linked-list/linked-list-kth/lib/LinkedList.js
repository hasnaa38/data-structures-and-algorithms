'use strict';

const Node = require('./Node');

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0; //list length
  }

  // To append a value to the end of the linked list using the tail property
  append(value){
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.head.index = 1;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      newNode.index = this.tail.index + 1; // change the index of the new node
      this.tail.next = newNode; // the next of the current is the new node
      this.tail = newNode; // the new tail is the new node
    }
    this.length++;
  }

  // new function
  kthFromEnd(k){
    // (edge) - k is not a positive integer
    let regex = /^[0-9]\d*/;
    if(!(regex.test(k))){
      return 'k must be a positive integer';
    }
    // (edge) - if empty list:
    if(this.length === 0){
      return 'empty list';
    }
    // Step 1 - Find the backward index of the node
    let backwardIndex = this.length - k;
    // (edge) - the k is more than the list nodes
    if(this.length === k){
      return 'k = length';
    }
    // (edge) - the k is more than the list nodes
    if(this.length < k){
      return 'k > length';
    }
    // (edge) - if the k is 0, return the tail's value
    if(this.length === backwardIndex){
      return this.tail.value;
    }
    // step 4 - loop through the nodes
    let currentNode = this.head;
    while(currentNode.next){
      if(currentNode.index === backwardIndex){
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
  }

  toString(){
    if (!this.head){
      return 'empty linked list';
    }
    let finalString = 'head -> ';
    let currentNode = this.head;
    while(currentNode.next){
      finalString = finalString + `{ ${currentNode.value } } -> `;
      currentNode = currentNode.next;
    }
    return finalString + `{ ${currentNode.value } } -> X`;
  }

}

module.exports = LinkedList;
