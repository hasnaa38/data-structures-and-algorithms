'use strict';

function insertionSort(array){
  for(let i=0; i<array.length; i++){
    let currentValue = array[i];
    for(let j=i-1; j>=0; j--){
      if(currentValue < array[j]){
        array[i] = array[j];
        array[j] = currentValue;
        i = j;
      }
    }
  }
  return array;
}

module.exports = insertionSort;

/*
//Selection Sort =>
function insertionSort(array){
  for(let i=0; i<array.length; i++){
    let currentMin = array[i];
    let index = i;
    for(let j=i; j<array.length; j++){
      if(array[j] < currentMin){
        currentMin = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = currentMin;
  }
  return array;
}
*/