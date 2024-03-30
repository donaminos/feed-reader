export const formatListItems = ({ items = [] }) =>
  items.map(({ slug, title }) => ({
    id: slug,
    label: title,
  }));

class CacheNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LRUCache {
  constructor(limit) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.limit = limit || 5;
    this.cache = new Map();
  }

  _addHead(data) {
    const node = new CacheNode(data);
    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    if (this.length > this.limit) {
      this._removeTail();
    }
  }

  _addTail(data) {
    const node = new CacheNode(data);
    this.length++;
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  _removeHead() {
    if (this.head) {
      this.length--;
      const { data } = this.head;
      this.cache.delete(data.key);
      const newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
    }
  }

  _removeTail() {
    if (this.tail) {
      this.length--;
      const { data } = this.tail;
      this.cache.delete(data.key);
      const tailParent = this.tail.prev;
      tailParent.next = null;
    }
  }

  set(key, value) {
    const data = { key, value };
    this._addHead(data);
    this.cache.set(key, value);
  }

  get(key) {
    return this.cache.get(key);
  }
}
