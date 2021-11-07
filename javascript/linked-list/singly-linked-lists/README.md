# Singly Linked List

A linked list is a dynamic data structure that represents a sequence of nodes connected to each other. Link lists are used to store data. They store nodes sequentially and nodes can be appended/removed from it.

In a linked list:

1. head points to the first node of the list
2. tail points to the last node of the list
3. next points to the next node in the sequence

Javascript doesn't implement linked lists. Therefore, we code them from scratch.

## Challenge

The challenge was to implement a singly linked list class that has 3 methods:
1. Appending new nodes - **insert(value)**
2. Indicate whether a value exists as a Node’s value somewhere within the list - **includes(value)**
3. Returns a string representing all the values in the linked List - **toString()**

## Approach & Efficiency

### Approach

1. Creating a Node class. It has properties for the Node's value, and a pointer to the next Node.
2. Creating a Linked List class. The class includes a null-by-default head property. Upon instantiating, an empty linked list should be created.
3. Creating the 3 methods. Methods are described in the API section.

## Efficiency

All the methods have the efficiency of O(n) for both time and space complexities. As the number of nodes increases, the time/space it needs will be increased.

## API

### The insert(value) method

This method appends a new node to the linked list. First, it checks wether the list is empty or not. If it was empty, it will create the new node and assign it to become the head of the list. If not, it will create it and change the next pointer of the previous node so it points to it.

### The includes(value) method

This method transverses through the linked list nodes and checks wether the value of the node is equal to the given value or not. If the value exists in the list, it will return true. If not, it will return false.
Edge case: in the case of empty linked list, it will reply with false also.

### The toString() method

This method stores the values of each node in the linked list and reply with it in the form of:  `{ 1 } -> { 2 } -> { 3 } -> NULL`.
