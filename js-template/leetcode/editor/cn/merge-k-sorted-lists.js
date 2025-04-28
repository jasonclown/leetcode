/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30104
 *
 * [23] 合并 K 个升序链表
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start

// 优先级队列
class MyPriorityQueue {
  constructor(capacity, comparator) {
    this.heap = new Array(capacity);
    this.size = 0;
    this.comparator = comparator
      ? comparator
      : (a, b) => (a > b ? 1 : a < b ? -1 : 0);
  }

  isEmpty() {
    return !(this.size > 0);
  }

  resize(capacity) {
    const newArr = new Array(capacity);
    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.heap[i];
    }
    this.heap = newArr;
  }

  swap(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  parentIndex(i) {
    const index = Math.floor((i - 1) / 2);
    return index;
  }

  leftIndex(i) {
    const index = i * 2 + 1;
    return index;
  }

  rightIndex(i) {
    const index = i * 2 + 2;
    return index;
  }

  push(num) {
    if (!num) {
      return;
    }
    if (this.size === this.heap.length) {
      this.resize(this.size * 2);
    }
    this.heap[this.size] = num;
    this.float(this.size);
    this.size++;
  }

  float(index) {
    let i = index;
    while (
      i > 0 &&
      this.comparator(this.heap[this.parentIndex(i)], this.heap[i]) > 0
    ) {
      this.swap(this.parentIndex(i), i);
      i = this.parentIndex(i);
    }
  }

  pop() {
    const top = this.heap[0];
    this.swap(0, this.size - 1);
    this.heap[this.size - 1] = undefined;
    this.size--;
    this.sink(0);
    if (this.size > 0 && this.size === Math.floor(this.heap.length / 4)) {
      this.resize(Math.floor(this.heap.length / 2));
    }
    return top;
  }

  sink(index) {
    let i = index;
    while (this.leftIndex(i) < this.size || this.rightIndex(i) < this.size) {
      let minIndex = i;
      if (
        this.leftIndex(i) < this.size &&
        this.comparator(this.heap[this.leftIndex(i)], this.heap[minIndex]) < 0
      ) {
        minIndex = this.leftIndex(i);
      }
      if (
        this.rightIndex(i) < this.size &&
        this.comparator(this.heap[this.rightIndex(i)], this.heap[minIndex]) < 0
      ) {
        minIndex = this.rightIndex(i);
      }
      if (minIndex === i) {
        break;
      }
      // 需要将比对出来的最小的值和当前值做一个互换
      this.swap(i, minIndex);
      i = minIndex;
    }
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const isMaxHeap = true;
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const header = new ListNode();
  // 小顶堆
  const comparator = isMaxHeap
    ? (a, b) => (a.val < b.val ? 1 : a.val > b.val ? -1 : 0)
    : (a, b) => (a.val > b.val ? 1 : a.val < b.val ? -1 : 0);
  // 大顶堆
  // const comparator = (a, b) => (a.val < b.val ? 1 : a.val > b.val ? -1 : 0);
  const queue = new MyPriorityQueue(lists.length, comparator);
  lists.forEach((list) => {
    queue.push(list);
  });
  let cur = header;
  while (!queue.isEmpty()) {
    const tmpNode = queue.pop();
    cur.next = tmpNode;
    cur = cur.next;
    if (tmpNode.next) {
      queue.push(tmpNode.next);
    }
  }
  return header.next;
};
// @lc code=end

// your test code here
const lists = [
  [-10, -9, -9, -3, -1, -1, 0],
  [-5],
  [4],
  [-8],
  [],
  [-9, -6, -5, -4, -2, 2, 3],
  [-3, -3, -2, -1, 0],
];
const newLists = isMaxHeap
  ? lists.map((list) => list.sort((a, b) => b - a))
  : lists;
console.log('newLists', newLists.toString());
const result = mergeKLists(newLists.map(list=>ListNode.createHead(list)));
ListNode.print(result);

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
