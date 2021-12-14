'use strict';

let HashTable = require('./hashtables/hashtable');
let {leftJoin} = require('./hashtables/functions');

let map1 = new HashTable(5);
let map2 = new HashTable(5);

map1.add('test11', 'value1from1');
map1.add('test21', 'value2from1');
map1.add('test31', 'value3from1');
map1.add('test41', 'value4from1');
// map1.add('test41', 'value4from1');
map1.add('test51', 'value5from1');
// map1.add('test51', 'value5from1');

// map2.add('test11', 'value1from2');
// map2.add('test21', 'value2from2');
// map2.add('test32', 'value3from2');
// map2.add('test41', 'value4from2');
// map2.add('test52', 'value5from2');

map2.add('test12', 'value1from2');
map2.add('test21', 'value2from2');
map2.add('test32', 'value3from2');
map2.add('test42', 'value4from2');
map2.add('test52', 'value5from2');

console.log(leftJoin(map1, map2));
