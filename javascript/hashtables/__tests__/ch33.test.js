'use strict';

let HashTable = require('../hashtable');
let {leftJoin} = require('../functions');
let map1 = new HashTable(5);
map1.add('test11', 'value1from1');
map1.add('test21', 'value2from1');
map1.add('test31', 'value3from1');
map1.add('test41', 'value4from1');
map1.add('test51', 'value5from1');

describe('testing the left joins function', () => {
  test('Can combine the key and corresponding values of the first hashmap, the second hashmap dont has completely different keys -> has nulls', () => {
    let map2 = new HashTable(5);
    map2.add('test12', 'value1from2');
    map2.add('test22', 'value2from2');
    map2.add('test32', 'value3from2');
    map2.add('test42', 'value4from2');
    map2.add('test52', 'value5from2');
    expect(leftJoin(map1, map2)).toStrictEqual([
      [ 'test51', 'value5from1', null ],
      [ 'test41', 'value4from1', null ],
      [ 'test31', 'value3from1', null ],
      [ 'test21', 'value2from1', null ],
      [ 'test11', 'value1from1', null ]
    ]);
  });
  test('Can combine the key and corresponding values of the first hashmap, the second hashmap has some similar keys -> has some nulls', () => {
    let map2 = new HashTable(5);
    map2.add('test12', 'value1from2');
    map2.add('test21', 'value2from2');
    map2.add('test32', 'value3from2');
    map2.add('test42', 'value4from2');
    map2.add('test51', 'value5from2');
    expect(leftJoin(map1, map2)).toStrictEqual([
      [ 'test51', 'value5from1', 'value5from2' ],
      [ 'test41', 'value4from1', null ],
      [ 'test31', 'value3from1', null ],
      [ 'test21', 'value2from1', 'value2from2' ],
      [ 'test11', 'value1from1', null ]
    ]);
  });
  test('Can combine the key and corresponding values of the first hashmap, the second hashmap has the same keys -> no null', () => {
    let map2 = new HashTable(5);
    map2.add('test11', 'value1from2');
    map2.add('test21', 'value2from2');
    map2.add('test31', 'value3from2');
    map2.add('test41', 'value4from2');
    map2.add('test51', 'value5from2');
    expect(leftJoin(map1, map2)).toStrictEqual([
      [ 'test51', 'value5from1', 'value5from2' ],
      [ 'test41', 'value4from1', 'value4from2' ],
      [ 'test31', 'value3from1', 'value3from2' ],
      [ 'test21', 'value2from1', 'value2from2' ],
      [ 'test11', 'value1from1', 'value1from2' ]
    ]);
  });
  test('Can combine the key and corresponding values of the first hashmap, the second hashmap has some similar keys but a different size', () => {
    let map2 = new HashTable(3);
    map2.add('test12', 'value1from2');
    map2.add('test21', 'value2from2');
    map2.add('test32', 'value3from2');
    expect(leftJoin(map1, map2)).toStrictEqual([
      [ 'test51', 'value5from1', null ],
      [ 'test41', 'value4from1', null ],
      [ 'test31', 'value3from1', null ],
      [ 'test21', 'value2from1', 'value2from2' ],
      [ 'test11', 'value1from1', null ]
    ]);
  });
  test('If the first hashmap has any collisions, return null', () => {
    map1.add('test41', 'value4from1');
    let map2 = new HashTable(3);
    map1.add('test12', 'value1from2');
    map2.add('test21', 'value2from2');
    map2.add('test32', 'value3from2');
    expect(leftJoin(map1, map2)).toBe(null);
  });

});

