'use strict';

const AnimalShelter = require('./lib/AnimalShelter');

function doWork(){
  let newSh = new AnimalShelter();
  newSh.enqueue({name: 'animal1', type: 'cat'});
  newSh.enqueue({name: 'animal2', type: 'dog'});
  newSh.enqueue({name: 'animal3', type: 'cat'});
  console.log(newSh.dequeue('dog'));
  console.log(newSh);
}

module.exports = doWork;
