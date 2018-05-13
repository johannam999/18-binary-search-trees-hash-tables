# Lab 18 - Binary Tree Tree and K-ary Tree

**Author** Joanna Coll, Panos Kumasaka, Kris Sakarias

**Version** 1.0.0

## Overview
This is an implementation of a binary tree search tree and a k-ary tree. The binary search tree is constructed in the same manner as a binary tree, but with nodes organized by values. The k-ary tree is similar but there is no restriction on the number of child nodes, which are represented as an array on the constructor. 

## Documentation
The **Binary Search tree** can be instantiated by: `const bst = new BinarySearchTree()`. 


The Binary Search tree has two methods:

- `bst.insert(value)` - traverses the tree and inserts a node with the specified value into the proper place in the tree.

- `bst.find(value)` - traverses the tree until it finds a node with the specified value.

- `bst.remove(value)` - traverses the tree until it finds a node with the specified value; removes the node.

Both methods have a space and time complexity of O(h), where h is the height of the tree. This is otherwise knowns a 0(log n).



The **K-ary tree** can be instantiated by: `const kst = new KAryTree()`.


The KAry tree has four methods:

- `kst.breadthFirstTraversal()` - uses a queue to traverse the tree by enqueueing child nodes of a dequeued node until the tree has been fully explored.

- `kst.find(value)` - traverses the tree as in the breadthFirstTraversal and returns the node with the given value.

- `kst.toString()` - uses a queue to traverse the tree and returns all node values in a comma-separated string.

- `kst.toArray()` - uses a stack to traverse the tree depth-first and returns all node values in an array.

All methods have a time and space complexity of O(n), where n is the number of nodes in the tree.

### Tests
To run tests:

1. ```git clone https://github.com/johannam999/18-binary-search-trees-hash-tables```
2. ```npm i```
3. ```npm run test```
