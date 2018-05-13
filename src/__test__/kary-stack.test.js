'use strict';

import KAryTree from '../lib/kary-stack';
import KAryNode from '../lib/kary-node'; 

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3); 
one.appendChild(4); 

one.children[1].appendChild(5); 
one.children[1].appendChild(6); 
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

describe('testing toArray function', () => {
  test('should show the array', () => {
    const arr = kAryTree.toArray();
    expect(arr[0]).toEqual(1);
    expect(arr[1]).toEqual(4);
    expect(arr[2]).toEqual(3);
    expect(arr[3]).toEqual(7);
    expect(arr[4]).toEqual(6);
    expect(arr[5]).toEqual(8);
    expect(arr[6]).toEqual(5);
    expect(arr[7]).toEqual(2);
  });

  test('testing for array not to be null', () => {
    const arr = kAryTree.toArray();
    expect(arr).not.toBeNull();
  });

  test('testing the array length', () => {
    const arr = kAryTree.toArray();
    expect(arr).toHaveLength(8);
  });
});

