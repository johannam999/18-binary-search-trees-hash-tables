'use strict';

class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = []; // all the children for this node
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this._children.push(nodeToAppend);
  } 
}

export default KAryNode();
