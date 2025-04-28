/*
 * @lc app=leetcode.cn id=313 lang=javascript
 * @lcpr version=30104
 *
 * [313] 超级丑数
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const heap = function (comparator) {
  this.arr = [];
  this.comparator = comparator;
};
heap.prototype.getParentIndex = function (index) {
  // 注意1：父节点获取公式，外部调用时，index一定>0
  return Math.floor((index - 1) / 2);
};
heap.prototype.getLeftIndex = function (index) {
  return index * 2 + 1;
};
heap.prototype.getRightIndex = function (index) {
  return index * 2 + 2;
};
heap.prototype.insert = function (val) {
  const len = this.arr.length;
  this.arr.push(val);
  this.swim(len);
};
heap.prototype.pop = function () {
  const num = this.arr[0];
  this.swapByIndex(0, this.arr.length - 1);
  this.arr.splice(this.arr.length - 1, 1);
  this.sink(0);
  return num;
};
heap.prototype.sink = function (index) {
  const len = this.arr.length;
  // 注意二： 需要比较index节点与其左右子节点的大小，选出其中最小的，与之交互值
  while (this.getLeftIndex(index) < len || this.getRightIndex(index) < len) {
    let minIndex = index;
    if (
      this.getLeftIndex(index) < len &&
      !this.comparator(this.arr[minIndex], this.arr[this.getLeftIndex(index)])
    ) {
      minIndex = this.getLeftIndex(index);
    }
    if (
      this.getRightIndex(index) < len &&
      !this.comparator(this.arr[minIndex], this.arr[this.getRightIndex(index)])
    ) {
      minIndex = this.getRightIndex(index);
    }
    if (minIndex === index) {
      // 左右子节点都比当前值大，无需下层，
      break;
    }
    this.swapByIndex(minIndex, index);
    index = minIndex;
  }
};
heap.prototype.swim = function (index) {
  // 注意三：判断index对应值是否比其父节点小，是的话需要交互index和对应值，然后继续往上比，直到与根节点比对完
  while (
    index > 0 &&
    !this.comparator(this.arr[this.getParentIndex(index)], this.arr[index])
  ) {
    this.swapByIndex(this.getParentIndex(index), index);
    index = this.getParentIndex(index);
  }
};
heap.prototype.swapByIndex = function (i, j) {
  [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
};

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const minHeap = new heap((a, b) => a[0] <= b[0]);
  const ugly = [];
  for (const prime of primes) {
    minHeap.insert([1, prime, 1]);
  }
  let k = 1;
  while (k <= n) {
    const min = minHeap.pop();
    const [product, prime, index] = min;
    if (product !== ugly[k - 1]) {
      ugly[k] = product;
      k++;
    }
    minHeap.insert([ugly[index] * prime, prime, index + 1]);
  }
  return ugly[n];
};
// @lc code=end

// your test code here
nthSuperUglyNumber(10, [2, 5, 7, 11, 13, 17, 23, 29, 43, 53]);
/*
// @lcpr case=start
// 12\n[2,7,13,19]\n
// @lcpr case=end

// @lcpr case=start
// 1\n[2,3,5]\n
// @lcpr case=end

 */
