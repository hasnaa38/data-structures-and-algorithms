'use strict';

const Node = require('./Node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  // So far, we have an empty Linked List
  // To append/add/push values to the end of the linked list
  // The function will create a new node and link it to our linked list
  insert(value){
    // Edge case: the LL is empty
    // Create a new node
    const newNode = new Node(value);

    // if the list is empty, head = newNode
    if(!this.head) {
      this.head = newNode;
      return this; // to return the list with the new head node
    }

    // To add a new node to an already existing LL:
    // 1. transverse through the LL first to find the last node
    // 2. once you find it, add the new node so it becomes the last
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this.head;
  }

  // To find if a value exists or not in a linked list
  includes(value){
    if (!this.head){
      return false;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      if (currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Prints the values of a linked list
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
    return finalString + `{ ${currentNode.value } } -> NULL`;
  }
}

/*
> instanceOfLinkedList = new LinkedList();
head:null
? instanceOfLinkedList.append(value);
head:{value:value, next:null}
*/
module.exports = LinkedList;
