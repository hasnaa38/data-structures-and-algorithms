'use strict';

function sortedMerge(left, right, array){
  // This function merges two sorted arrays
  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] <= right[rightIndex]){
      array[arrayIndex] = left[leftIndex];
      leftIndex++;
    } else {
      array[arrayIndex] = right[rightIndex];
      rightIndex++;
    }
    arrayIndex++;
  }
  if(leftIndex === left.length) {
    // if all the values were taken from the left array and the right has any more values -> push them to the end
    while(arrayIndex < array.length){
      array[arrayIndex] = right[rightIndex];
      rightIndex++;
      arrayIndex++;
    }
  } else {
    while(arrayIndex < array.length){
      array[arrayIndex] = left[leftIndex];
      leftIndex++;
      arrayIndex++;
    }
  }
}

function _mergeSort(array){
  let n = array.length;
  if(n>1){
    let mid = Math.floor(n/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    _mergeSort(left);
    _mergeSort(right);
    sortedMerge(left, right, array);
  }
  return array;
}

module.exports = _mergeSort;
