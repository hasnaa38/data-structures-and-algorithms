'use strict';

const Node = require('./Node');

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.previous = null;
    this.length = 0;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
    return this.head;
  }

  // To append a value to the end of the linked list using the tail property
  append(value){
    // 1- Create a new node
    const newNode = new Node(value);
    // 2- append the new node
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode; // the current tail is pointing to the new node
      this.tail = newNode; // making the new node become the new tail
    }
    this.length++;
  }

  insertBefore(value, newValue){
    if(this.length < value){
      return 'No change, method exception';
    }
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
  }

  insertAfter(value, newValue){
    if(this.length < value){
      return 'No change, method exception';
    }
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
      return 'empty list';
    }
    let finalString = 'head -> ';
    let currentNode = this.head;
    while(currentNode.next){
      finalString = finalString + `{ ${currentNode.value } } -> `;
      currentNode = currentNode.next;
    }
    return finalString + `{ ${currentNode.value } } -> NULL`;
  }

  // final
  zipLists(list1, list2){
    if(!list1.length || !list2.length){
      return 'inputs contain empty lists';
    }
    let list1Current = list1.head; //1
    let list2Current = list2.head; //4
    let hold1 = null;
    let hold2 = null;
    let finalRes = 'head -> ';
    let listsLength = list1.length + list2.length;
    let newLength = 0;
    while(list2Current && list1Current){
      newLength = newLength + 2;
      hold1= list1Current.next;
      hold2 = list2Current.next;
      list2Current.next = list1Current.next;
      list1Current.next = list2Current;
      finalRes = finalRes + `${list1Current.value} -> ${list2Current.value} -> `;
      list1Current = hold1;
      list2Current = hold2;
    }
    if(newLength<listsLength){
      if(list1.length>list2.length){
        while(newLength<listsLength){
          finalRes = finalRes + `${list1Current.value} -> ` ;
          newLength++;
          list1Current = list1Current.next;
        }
      } else {
        while(newLength<listsLength){
          finalRes = finalRes + `${list2Current.value} -> ` ;
          newLength++;
          list2Current = list2Current.next;
        }
      }
    }
    return finalRes + 'NULL';
  }

  isPalindrome(){
    if(!this.length){
      return 'empty list!';
    }
    let middle = Math.floor(this.length/2);
    let currentForward = this.head;
    let currentBackward = this.tail;
    for(let i=0; i<middle; i++){
      if(currentForward.value !== currentBackward.value){
        return false;
      }
      currentForward = currentForward.next;
      currentBackward = currentBackward.previous;
    }
    return true;
  }
}

module.exports = LinkedList;
