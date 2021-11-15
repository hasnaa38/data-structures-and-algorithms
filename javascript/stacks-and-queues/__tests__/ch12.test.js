'use strict';

const AnimalShelter = require('../lib/AnimalShelter');
let newShelter = new AnimalShelter();

describe('Animal Shelter Queue Testing', ()=>{
  test('can enqueue a new animal to an empty queue', ()=>{
    let animal1 = {name: 'animal1', type: 'cat'};
    newShelter.enqueue(animal1);
    expect(newShelter.length).toBe(1);
  });
  test('can enqueue multiple animals in one queue', ()=>{
    let animal2 = {name: 'animal2', type: 'dog'};
    newShelter.enqueue(animal2);
    let animal3 = {name: 'animal3', type: 'cat'};
    newShelter.enqueue(animal3);
    expect(newShelter.length).toBe(3);
  });
  test('enqueueing an animal that is not a cat nor a dog', ()=>{
    let animal = {name: 'animal', type: 'owl'};
    expect(newShelter.enqueue(animal)).toBe('cats and dogs only');
  });
  test('can dequeue an animal from the preferred type', ()=>{
    expect(newShelter.dequeue('dog').value.type).toBe('dog');
    expect(newShelter.length).toBe(2);
  });
  test('returns null when no animals of the preferred type are left', ()=>{
    expect(newShelter.dequeue('dog')).toBe(null);
  });
  test('dequeuing an animal other than a cat or a dog', ()=>{
    expect(newShelter.dequeue('owl')).toBe(null);
  });
});
