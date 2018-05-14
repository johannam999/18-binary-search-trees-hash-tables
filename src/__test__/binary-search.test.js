'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import BinaryNode from '../lib/binary-node'; 

const testTree = new BinarySearchTree();

const node1 = new BinaryNode(4);
const node2 = new BinaryNode(2);
const node3 = new BinaryNode(5);
const node4 = new BinaryNode(6);
const node5 = new BinaryNode(10);
const node6 = new BinaryNode(1);

describe('testing insertions', () => {
  test('Should change root node', () => {
    testTree.insert(node1);
    expect(testTree.root.value).toEqual(4);
  });
  test('Should be on left', () => {
    testTree.insert(node2);
    expect(testTree.root.left.value).toEqual(2);
  });
  test('Should be on right', () => {
    testTree.insert(node4);
    expect(testTree.root.right.value).toEqual(6);
  });
  test('Should be left of right', () => {
    testTree.insert(node3);
    expect(testTree.root.right.left.value).toEqual(5);
  });
  test('Should be right of right', () => {
    testTree.insert(node5);
    expect(testTree.root.right.right.value).toEqual(10);
  });
  test('Should be left of left', () => {
    testTree.insert(node6);
    expect(testTree.root.left.left.value).toEqual(1);
  });
});

describe('testing find', () => {
  test('should return proper node', () => {
    expect(testTree.find(4)).toEqual(node1);
  });
});
describe('testing remove', () => {
  test('should replace left of root with its child', () => {
    testTree.remove(2);
    console.log(testTree);
    expect(testTree.root.left.value).toEqual(1);
  });
});
