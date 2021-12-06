'use strict';

let _mergeSort = require('../mergeSort');
let testingArr1 = [8,4,23,42,16,15];
let testingArr2 = [20,18,12,8,5,-2];
let testingArr3 = [5,12,7,5,5,7];
let testingArr4 = [2,3,5,7,13,11];

describe('testing insertion sort', () => {
  it('can sort an unsorted array with just positive values and no repeats', () => {
    expect(_mergeSort(testingArr1)).toStrictEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
  it('can sort an unsorted array with negative valued elements', () => {
    expect(_mergeSort(testingArr2)).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
  });
  it('can sort and array with repeated elements', () => {
    expect(_mergeSort(testingArr3)).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('can sort a nearly-sorted array', () => {
    expect(_mergeSort(testingArr4)).toStrictEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
  it('returns the same array if the an array of only one element was the argument', () => {
    expect(_mergeSort([2])).toStrictEqual([ 2 ]);
  });
});
