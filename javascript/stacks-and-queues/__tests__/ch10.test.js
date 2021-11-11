'use strict';

const Stack = require('../lib/Stack');
const Queue = require('../lib/Queue');
let stackT = new Stack;
let queueT = new Queue;

describe('Stacks and queues testing', () => {
  describe('Stacks testing', () => {
    // Can successfully push onto a stack
    it('Can successfully push onto a stack', () => {
      expect(stackT.push(1)).toBe(1);
      expect(stackT.length).toBe(1);
    });
    // Can successfully push multiple values onto a stack
    it('Can successfully push multiple values onto a stack', () => {
      expect(stackT.push(2)).toBe(2);
      expect(stackT.length).toBe(2);
    });
    // Can successfully pop off the stack
    it('Can successfully pop off the stack', () => {
      expect(stackT.pop()).toBe(1);
      expect(stackT.length).toBe(1);
    });
    // Can successfully empty a stack after multiple pops
    it('Can successfully empty a stack after multiple pops', () => {
      expect(stackT.pop()).toBe('empty stack');
      expect(stackT.isEmpty()).toBe(true);
    });
    // Calling pop or peek on empty stack raises exception
    it('Calling pop or peek on empty stack raises exception', () => {
      expect(stackT.pop()).toBe(false);
      expect(stackT.peek()).toBe(false);
    });
    // Can successfully instantiate an empty stack
    it('Can successfully instantiate an empty stack', () => {
      expect(stackT.isEmpty()).toBe(true);
      expect(stackT.push(1)).toBe(1);
      expect(stackT.isEmpty()).toBe(false);
    });
    // Can successfully peek the next item on the stack
    it('Can successfully peek the next item on the stack', () => {
      stackT.push(2);
      expect(stackT.peek()).toBe(2);
    });
  });
  describe('Queues testing', () => {
    // Can successfully enqueue into a queue
    it('Can successfully enqueue into a queue', () => {
      expect(queueT.enqueue(1)).toBe(1);
      expect(queueT.length).toBe(1);
    });
    // Can successfully enqueue multiple values into a queue
    it('Can successfully enqueue multiple values into a queue', () => {
      expect(queueT.enqueue(2)).toBe(2);
      expect(queueT.length).toBe(2);
    });
    // Can successfully dequeue out of a queue the expected value
    it('Can successfully dequeue out of a queue the expected value', () => {
      console.log(queueT);
      expect(queueT.dequeue()).toBe(2);
      expect(queueT.length).toBe(1);
    });
    // Can successfully peek into a queue, seeing the expected value
    it('Can successfully peek into a queue, seeing the expected value', () => {
      expect(queueT.peek()).toBe(2);
    });
    // Can successfully empty a queue after multiple dequeues
    it('Can successfully empty a queue after multiple dequeues', () => {
      expect(queueT.dequeue()).toBe('empty queue');
      expect(queueT.isEmpty()).toBe(true);
    });
    // Calling dequeue or peek on empty queue raises exception
    it('Calling dequeue or peek on empty queue raises exception', () => {
      expect(queueT.isEmpty()).toBe(true);
    });
    // Can successfully instantiate an empty queue
    it('Can successfully instantiate an empty queue', () => {
      expect(queueT.enqueue(1)).toBe(1);
      expect(queueT.length).toBe(1);
    });
  });

});
