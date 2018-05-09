'use strict';

import BinaryTree from './binary-tree';
import Node from './node';
import inOrderTraversal from './traversals';


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

describe(' testing for the right order', () => {
  test('in-order returns a string of numbers', () => {
    expect(inOrderTraversal(tree.root)).toEqual('687921435');
  });
  test('if binary tree is null', () => {
    const noTree = new BinaryTree(null);
    expect(inOrderTraversal(noTree.root)).toBe(undefined);
  });
  test('checking if displays a string', () => {
    expect(typeof inOrderTraversal(tree.root)).toBe('string');
  });
});
