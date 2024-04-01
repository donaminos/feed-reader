class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  addHead(data: T) {
    const node = new ListNode(data);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  addTail(data: T) {
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
  setHead(node: ListNode<T> | null) {
    return (this.head = node);
  }

  toString() {
    let output = "";
    let currentNode = this.head;
    while (currentNode) {
      output = output
        ? `${output} -> ${currentNode.data}`
        : `${currentNode.data}`;

      currentNode = currentNode.next;
    }

    return output;
  }
}

const getListFromInput = (input: string): LinkedList<string> => {
  const linkedList = new LinkedList<string>();
  const arr = input.split("->").map((item) => item.trim());
  arr.forEach((item) => {
    linkedList.addTail(item);
  });

  return linkedList;
};

/**
 * Complexity analysis
 * 0. I use a string as input that, eventually, is transformed to an array of n values used to create the initial linked lit.
 *    The time complexity and space complexity would be both O(n) as we iterate over n element and add them to memory. getListFromInput analysis is not
 *    included in the rest of the analysis as it serves to prepate the input only.
 *
 * 1. We have 2 variables output and currentNode used for the processing. This transates to O(1) in time and space complexity
 * 2. We traverse all list nodes inside the while loop which gives a time complexity of O(n) and also we create n nodes in memory for the second linked list.
 *    Space complexity is then O(n)
 * => By dropping the constants:
 *      - Time complexity: O(n)
 *      - Space complexity: O(n)
 */

export const printReverse = (input = ""): string => {
  // Init the linked list
  const linkedList = getListFromInput(input);

  // Reverse
  let output = "";
  // This list is not needed.(learning purpose only)
  const reverseList = new LinkedList<string>();
  let currentNode = linkedList.getHead();
  while (currentNode) {
    output = output
      ? `${currentNode.data} -> ${output}`
      : `${currentNode.data}`;

    reverseList.addHead(currentNode.data);
    currentNode = currentNode.next;
  }

  return output;
};

// These implementations below mutate the original list

/**
 * Complexity analysis
 * 0. I use a string as input that, eventually, is transformed to an array of n values used to create the initial linked lit.
 *    The time complexity and space complexity would be both O(n) as we iterate over n element and add them to memory. getListFromInput analysis is not
 *    included in the rest of the analysis as it serves to prepate the input only.
 *
 * 1. We create 3 variables in memory currentNode, previousNode and nextNode which is independant from n. Space complexity is O(1)
 * 2. We traverse all nodes inside the while loop, so the time complexity would be O(n)
 * 3. Methods calls are added to the call stack memory, but are indepdant from n. Space complexity is O(1)
 * => By dropping the constants:
 *    - Time complexity: O(n)
 *    - Space complexity: O(1)
 */
export const reverseList = (input: string) => {
  const linkedList = getListFromInput(input);

  let currentNode = linkedList.getHead();
  let previousNode: ListNode<string> | null = null;
  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  linkedList.setHead(previousNode);

  return linkedList.toString();
};

/**
 * Complexity analysis
 * 0. I use a string as input that, eventually, is transformed to an array of n values used to create the initial linked lit.
 *    The time complexity and space complexity would be both O(n) as we iterate over n element and add them to memory. getListFromInput analysis is not
 *    included in the rest of the analysis as it serves to prepate the input only.
 *
 * 1. We iterate over all nodes and call revers function for each one, so the time complexity would be O(n)
 * 2. The recursive call to reverse will add n call to the stack memory. The space complexity is O(n).
 * 3. We use some constant newHead, newPrev, head that are independant from n. Space complexity is O(1)
 * => By dropping the constants:
 *    - Time complexity: O(n)
 *    - Space complexity: O(n)
 */

const reverse = (
  head: ListNode<string> | null,
  prev: ListNode<string> | null = null
): ListNode<string> | null => {
  if (!head) {
    return prev;
  }

  const newHead: ListNode<string> | null = head.next;
  head.next = prev;
  const newPrev = head;

  return reverse(newHead, newPrev);
};

export const reverseListRecursivly = (input: string): string => {
  const linkedList = getListFromInput(input);
  const head = linkedList.getHead();

  const newHead = reverse(head);
  linkedList.setHead(newHead);

  return linkedList.toString();
};
