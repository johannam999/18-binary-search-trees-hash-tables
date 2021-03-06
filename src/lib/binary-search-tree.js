'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  remove(value) {
    const oldNode = this.root;
    const nodeToBeRemoved = this.findForRemove(value, oldNode);
    console.log(nodeToBeRemoved);
    this.__remove(nodeToBeRemoved, oldNode);
  }

  __remove(rootNode, oldNode) {
    console.log(rootNode);
    console.log(oldNode);
    let position = false;
    if (oldNode.left === rootNode) {
      position = true; 
    }
    if (!rootNode.left && !rootNode.right) {
      if (position === false) { 
        oldNode.left = null; 
      } else { 
        oldNode.right = null; 
      }
    }
    if (rootNode.left && !rootNode.right) {
      if (position === true) { 
        oldNode.left = rootNode.left; 
      } else { 
        oldNode.right = rootNode.left; 
      } 
    } else if (!rootNode.left && rootNode.right) {
      if (position === true) { 
        oldNode.left = rootNode.right; 
      } else { 
        oldNode.right = rootNode.left; 
      }
    }

    if (rootNode.left && rootNode.right) {
      const currentDifference = 0;
      let nodeToMove;
      this.removeValueComparer(rootNode, rootNode.value);
      if (left === true) {
        oldNode.left = nodeToMove;
      } else {
        oldNode.right = nodeToMove;
      }
    }
  }

  findForRemove(value, oldNode) {
    if (!this.root) {
      return null;    
    }      
    if (this.root.value === value) {
      return (this.root);
    }
    return this._findForRemove(this.root, value, oldNode);              
  }                

  _findForRemove(rootNode, value, oldNode) {
    if (!rootNode) {                  
      return null;                        
    } else if (rootNode.value === value) {                
      oldNode = rootNode;                            
      return (rootNode, value, oldNode);
    } else if (rootNode.value < value) {
      oldNode = rootNode;                                
      return this._findForRemove(rootNode.right, value, oldNode);
    }
    this.oldNode = rootNode;                                    
    return this._findForRemove(rootNode.left, value, oldNode);
  }
  
  removeValueComparer(comparingNode, valueForComparison) {
    if (Math.abs(comparingNode.value - valueForComparison) < this.currentDifference) {
      this.nodeToMove = comparingNode;
      this.currentDifference = Math.abs(comparingNode.value - valueForComparison); 
    }
    if (comparingNode.left) {
      this.removeValueComparer(comparingNode.left); 
    }
    if (comparingNode.right) {
      this.removeValueComparer(comparingNode.right);
    }
  }


  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }
}

export default BinarySearchTree;
