'use strict';

let _quickSort = require('./sorting/quickSort');
let testingArr1 = [8,4,23,42,16,15];
let testingArr2 = [20,18,12,8,5,-2];
let testingArr3 = [5,12,7,5,5,7];
let testingArr4 = [2,3,5,7,13,11];
console.log('testing array: ', testingArr1);
console.log('result: ', _quickSort(testingArr1, 0, testingArr1.length-1));
console.log('=========');
console.log('testing array: ', testingArr2);
console.log('result: ', _quickSort(testingArr2, 0, testingArr2.length-1));
console.log('=========');
console.log('testing array: ', testingArr3);
console.log('result: ', _quickSort(testingArr3, 0, testingArr3.length-1));
console.log('=========');
console.log('testing array: ', testingArr4);
console.log('result: ', _quickSort(testingArr4, 0, testingArr4.length-1));

