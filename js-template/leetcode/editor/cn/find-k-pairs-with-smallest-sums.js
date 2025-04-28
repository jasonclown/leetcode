/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30104
 *
 * [373] 查找和最小的 K 对数字
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
class MyPriorityQueue {
  constructor(capacity, comparator) {
    this.comparator = comparator;
    this.queue = new Array(capacity);
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(iIndex, jIndex) {
    const tmp = this.queue[iIndex];
    this.queue[iIndex] = this.queue[jIndex];
    this.queue[jIndex] = tmp;
  }
  add(node) {
    this.queue[this.size] = node;
    this.swim(this.size);
    this.size++;
  }

  swim(index) {
    let i = index;
    while (i > 0) {
      const parentIndex = this.getParentIndex(i);
      const needChange = this.comparator(
        this.queue[parentIndex],
        this.queue[i]
      );
      if (needChange) {
        this.swap(this.getParentIndex(i), i);
      }
      i = parentIndex;
    }
  }

  pop() {
    const node = this.queue[0];
    this.swap(0, this.size - 1);
    this.queue[this.size - 1] = undefined;
    this.size--;
    this.sink(0);
    return node;
  }

  sink(index) {
    let i = index;
    while (
      this.getLeftChildIndex(i) < this.size ||
      this.getRightChildIndex(i) < this.size
    ) {
      let minIndex = i;
      if (
        this.getLeftChildIndex(i) < this.size &&
        this.comparator(this.queue[minIndex], this.queue[this.getLeftChildIndex(i)])
      ) {
        // 最小值和左节点左比较
        minIndex = this.getLeftChildIndex(i);
      }
      if (
        this.getRightChildIndex(i) < this.size &&
        this.comparator(this.queue[minIndex], this.queue[this.getRightChildIndex(i)])
      ) {
        // 最小值和右节点做比较
        minIndex = this.getRightChildIndex(i);
      }
      if (minIndex === i) {
        break;
      }
      this.swap(i, minIndex);
      i = minIndex;
    }
  }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const queue = new MyPriorityQueue(nums1.length, (a, b) => {
    const aSum = a[0] + a[1];
    const bSum = b[0] + b[1];
    if (aSum > bSum) {
      return true;
    } else {
      return false;
    }
  });
  for (let i = 0; i < nums1.length; i++) {
    queue.add([nums1[i], nums2[0], 0]);
  }
  const res = [];
  while (!queue.isEmpty() && k > 0) {
    const cur = queue.pop();
    k--;
    res.push([cur[0], cur[1]]);
    const nextIndex = cur[2] + 1;
    if (nums2.length > nextIndex) {
      queue.add([cur[0], nums2[nextIndex], nextIndex]);
    }
  }
  return res;
};
// @lc code=end

// your test code here
const result = kSmallestPairs([0,0,0,0,0,2,2,2,2],
  [-3,22,35,56,76],
  22);
result.forEach(arr => console.log(arr));
/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */
