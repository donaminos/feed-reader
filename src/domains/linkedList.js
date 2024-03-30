class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addHead(data) {
    const node = new ListNode(data);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  addTail(data) {
    const node = new ListNode(data);

    if (this.head) {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    } else {
      this.head = node;
    }
  }

  getHead() {
    return this.head;
  }
}

export const printReverse = (input = "") => {
  // Init the linked list
  const linkedList = new LinkedList();
  const arr = input.split("->").map((item) => item.trim());
  arr.forEach((item) => {
    linkedList.addTail(item);
  });

  // Reverse
  let output = "";
  // This list is not needed.(learning purpose only)
  const reverseList = new LinkedList();
  let currentNode = linkedList.getHead();
  while (currentNode) {
    output = output
      ? `${currentNode.data} -> ${output}`
      : `${currentNode.data}`;

    reverseList.addTail(currentNode);
    currentNode = currentNode.next;
  }

  return output;
};
