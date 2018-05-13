'use strict';

import KAryTree from '../lib/kary-tree';
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

describe('KAryTree.find(value)', () => {
  test('should return the node with the given value', () => {
    const find = kAryTree.find(3);
    expect(find.value).toEqual(3);
    expect(find.children).toHaveLength(3);
    expect(find.children[0].value).toEqual(5);
    expect(find.children[2].value).toEqual(7);
    expect(find.children[1].children[0].value).toEqual(8);
    expect(kAryTree.find(8).value).toEqual(8);
  });

  test('should return null if value doesn\'t exist in tree', () => {
    expect(kAryTree.find(10)).toBeNull();
  });

  test('should return null if tree root does not exist', () => {
    const kAryTreeNull = new KAryTree();
    expect(kAryTreeNull.root).toBeNull();
  });
});

describe('KAryTree.toString()', () => {
  test('should return string of the values of all nodes in breadth traversal', () => {
    const string = kAryTree.toString();
    expect(string.charAt(0)).toEqual('1');
    expect(string.charAt(1)).toEqual('\n');
    expect(string.charAt(2)).toEqual('2');
    expect(string.charAt(3)).toEqual('\n');
    expect(string.charAt(string.length - 2)).toEqual('8');
  });

  test('should return null if tree root does not exist', () => {
    const kAryTreeNull = new KAryTree();
    expect(kAryTreeNull.toString()).toBeNull();
  });
});
