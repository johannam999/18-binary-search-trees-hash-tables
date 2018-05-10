'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(n)
  // Space : O(w) -> O(n)
  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      console.log(`Visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return null;
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    const queue = new Queue();
    queue.enqueue(rootNode);
    let currentNode = rootNode;

    while (!queue.isEmpty()) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = queue.dequeue();
      console.log(`Dequeueing ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].value === value) {
          return currentNode.children[i];
        }
        queue.enqueue(currentNode.children[i]);
      }
    }
    console.log(this);
    return null;
  }

  toString() {
    if (!this.root) return null;
    return this._toString();
  }

  _toString() {
    let str = '';
    const queue = new Queue();
    queue.enqueue(this.root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      str += `${currentNode.value}\n`;

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return str;
  }

  // toArray() {
    
  // }
}
