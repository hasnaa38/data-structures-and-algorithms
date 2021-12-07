'use strict';

function _quickSort(array, left, right){
  if(left<right){
    let position = partition(array, left, right); //pivot
    _quickSort(array, left, position-1);
    _quickSort(array, position+1, right);
  }
  return array;
}

function partition(array, left, right){
  let pivot = array[right];
  let low = left - 1;
  for(let i = left; i<=right; i++){
    if(array[i] <= pivot){
      low++;
      swap(array, i, low);
    }
  }
  return low;
}

function swap(array, i, low){
  let temp = array[i];
  array[i] = array[low];
  array[low] = temp;
}

module.exports = _quickSort;
