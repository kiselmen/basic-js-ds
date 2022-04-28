const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
      this.length = 0;
      this.data = null;
  }

  getUnderlyingList() {
    if (this.data) {
        return this.data;
    } else {
        return null;
    }
  }

  enqueue(value) {
    this.length++;
    if (!this.data) {
        // очереди нет, ставим в начало задачу
        this.data = new ListNode(value);
    } else {
        // Идем в конец очереди
        let current = this.data;
        while (current.next) {
          current = current.next;
        }
        current.next = new ListNode(value);
    }
}

  dequeue() {
    let newData = null;
    if (this.data){
        newData = this.data;
        this.data = newData.next;
        this.length--;
        return newData.value;
    } else return newData;
  }
}

module.exports = {
  Queue
};
