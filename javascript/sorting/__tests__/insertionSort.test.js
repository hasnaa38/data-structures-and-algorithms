'use strict';

let insertionSort = require('../insertionSort');
let testingArr1 = [8,4,23,42,16,15];
let testingArr2 = [20,18,12,8,5,-2];
let testingArr3 = [5,12,7,5,5,7];
let testingArr4 = [2,3,5,7,13,11];

describe('testing insertion sort', () => {
  it('can sort an unsorted array with just positive values and no repeats', () => {
    expect(insertionSort(testingArr1)).toStrictEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
  it('can sort an unsorted array with negative valued elements', () => {
    expect(insertionSort(testingArr2)).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
  });
  it('can sort and array with repeated elements', () => {
    let result3 = insertionSort(testingArr3);
    expect(insertionSort(result3)).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('can sort a nearly-sorted array', () => {
    expect(insertionSort(testingArr4)).toStrictEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});
