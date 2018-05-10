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
const find = kAryTree.find(3);

describe('KAryTree.find', () => {
  test('should return the node with the given value', () => {
    expect(find.value).toEqual(3);
    expect(find.children.length).toEqual(3);
    expect(find.children[0].value).toEqual(5);
    expect(find.children[2].value).toEqual(7);
    expect(find.children[1].children[0].value).toEqual(8);
    expect(kAryTree.find(8).value).toEqual(8);
  });

  test('should return null if value doesn\'t exist in tree', () => {
    expect(
  });
});
