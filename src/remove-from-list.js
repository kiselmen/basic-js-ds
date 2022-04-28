const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
    const lArray = [];
    while (l) {
        if (l.value !== k) lArray.push(l.value);
        l = l.next;
    }
    console.log(lArray);
    
    return lArray.reverse().reduce((prevNode, curNode) => {
      if (!prevNode) {
        return new ListNode(curNode);
      }  
      else {   
        let tmpNode = new ListNode(curNode);
        tmpNode.next = prevNode;
        return tmpNode;
      }
    }, null);
}

module.exports = {
  removeKFromList
};
