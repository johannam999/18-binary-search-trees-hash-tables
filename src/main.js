'use strict';


import KAryNode from './lib/kary-node';
import KAryTree from './lib/kary-tree';

const one = new KAryNode(1);
one.appendChild(2);// index 0
one.appendChild(3);// index 1
one.appendChild(4);// index 2

one.children[1].appendChild(5);
one.children[1].appendChild(6);
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);
kAryTree.breadthSearchTraversal();

