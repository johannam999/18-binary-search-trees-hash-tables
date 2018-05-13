'use strict';

import Stack from 'stack-lifo';

export default class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  toArray() {
    if (!this.root) {
      return null;
    }
    return KAryTree._toArray(this.root);
  }
  
  static _toArray(rootNode) { // time : O(n), space O(w) = O(n)
    const stack = new Stack();
    stack.push(rootNode);
    const array = [];
    let currentNode = null;

    while (!stack.isEmpty()) {
      currentNode = stack.pop();
      array.push(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
    console.log(array);
    return array;   
  }
}
