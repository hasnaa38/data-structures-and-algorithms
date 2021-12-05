'use strict';

let insertionSort = require('./sorting/insertionSort');
let testingArr1 = [8,4,23,42,16,15];
let testingArr2 = [20,18,12,8,5,-2];
let testingArr3 = [5,12,7,5,5,7];
let testingArr4 = [2,3,5,7,13,11];
console.log('testing array: ', testingArr1);
console.log('result: ', insertionSort(testingArr1));
console.log('=========');
console.log('testing array: ', testingArr2);
console.log('result: ', insertionSort(testingArr2));
console.log('=========');
console.log('testing array: ', testingArr3);
console.log('result: ', insertionSort(testingArr3));
console.log('=========');
console.log('testing array: ', testingArr4);
console.log('result: ', insertionSort(testingArr4));
