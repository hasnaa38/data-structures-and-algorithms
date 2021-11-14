'use strict';
const PseudoQueue = require('../lib/pseudo-queue');
let newQueue = new PseudoQueue();


describe('testing pseudo queue implemented using 2 stacks',()=>{
  test('can enqueue values to an empty queue', ()=>{
    newQueue.enqueue(1);
    expect(newQueue.length).toBe(1);
  });
  test('can enqueue multiple values to a queue', ()=>{
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    expect(newQueue.length).toBe(5);
  });
  test('can dequeue a value from a queue', ()=>{
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.length).toBe(4);
  });
  test('can dequeue multiple values from a queue', ()=>{
    expect(newQueue.dequeue()).toBe(2);
    expect(newQueue.dequeue()).toBe(3);
    expect(newQueue.length).toBe(2);
  });
  test('can enqueue values to a queue after dequeuing and dequeue again', ()=>{
    newQueue.enqueue(10);
    newQueue.enqueue(100);
    expect(newQueue.length).toBe(4);
    expect(newQueue.dequeue()).toBe(4);
  });
  test('returns false when dequeuing from an empty queue', ()=>{
    let newQueue2 = new PseudoQueue();
    expect(newQueue2.dequeue()).toBe(false);
  });
});
