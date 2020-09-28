/**
 * Here, you have most of a doubly-linked list, a linked list where each node
 * points to its predecessor and follower. The tail node's follower (stored in
 * the "next" instance variable) should be null. The head node's predecessor
 * (stored in the "previous" variable) should be null, too.
 *
 * This has provided the methods for when you want to push values onto the
 * head and peek or retrieve them from the head. It is up to you to do the
 * same for the tail.
 ***************************************************************************/


class DoubleLinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getSize() {
    return this.length;
  }

  addToHead(value) {
    var newNode = new DoubleLinkNode(value);

    if (this.length > 0) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  peekAtHead() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }

  removeFromHead() {
    const currentNode = this.head;
    if (currentNode === null) {
      return undefined;
    }

    if (currentNode !== null) {
      this.head = currentNode.next;
    }

    if (this.head !== null) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }

    this.length -= 1;
    return currentNode.value;
  }

  addToTail(value) {
    let newNode = new DoubleLinkNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    let oldTail = this.tail
    this.tail.next = newNode
    this.tail = new
    this.tail.previous = oldTail
    this.tail.next = null 

    this.length++;
  }

  peekAtTail() {
    if(this.length === 0) return undefined;
    return this.tail.value;
  }

  removeFromTail() {
    if(this.length === 0) return undefined;
    let removed = this.tail.value;
    //let previous = this.tail.previous;
    this.tail.previous = null;
    //previous = this.tail
    this.length--;
    return removed;
  }
}


/****************************************************************************
 * Do not change code below this line.
 */
try {
  module.exports = { DoubleLinkedList };
} catch (e) {}
