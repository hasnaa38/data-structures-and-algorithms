'use strict';

let HashTable = require('../hashtable');
let testingHashTable = new HashTable(20);

describe('testing the basic hashtable implementation', ()=>{
  test('can hash a key to an in-range value', () => {
    expect(testingHashTable.hash('test')).toBe(12);
  });
  test('can add a key/value to the hashtable', () => {
    testingHashTable.add('key1','value1');
    expect(testingHashTable.contains('key1')).toBe(true);
  });
  test('can retrieve a stored value by its key', () => {
    expect(testingHashTable.get('key1')).toStrictEqual({'key1':'value1'});
  });
  test('returns null for a key that does not exist in the hashtable', () => {
    expect(testingHashTable.get('key2')).toBe(null);
  });
  test('can handle a collision within the hashtable', () => {
    testingHashTable.add('code','code value');
    testingHashTable.add('edoc','edoc value');
    expect(testingHashTable.contains('code')).toBe(true);
    expect(testingHashTable.contains('edoc')).toBe(true);
  });
  test('can retrieve a value from a bucket within the hashtable that has a collision', () => {});
  testingHashTable.add('code','code value');
  testingHashTable.add('edoc','edoc value');
  expect(testingHashTable.get('code')).toStrictEqual({'code':'code value'});
  expect(testingHashTable.get('edoc')).toStrictEqual({'edoc':'edoc value'});
});
