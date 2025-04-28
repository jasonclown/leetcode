/*
 * @lc app=leetcode.cn id=528 lang=javascript
 * @lcpr version=30104
 *
 * [528] 按权重随机选择
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.preSum = [0];
  for (let i = 1; i <= w.length; i++) {
    // this.preSum.push(this.preSum[this.preSum.length - 1] + w[i]);
    this.preSum[i] = w[i-1] + this.preSum[i - 1];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const len = this.preSum.length;
  // 当随机结果不是整数时，需要向上取整
  const target = Math.ceil(Math.random() * this.preSum[len - 1]);
  // 前缀和的下标和元素组的下标多1，所以最终结果上需要-1；
  return left_bound(this.preSum, target) - 1;
};
const left_bound = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["Solution","pickIndex"]\n[[[1]],[]]\n
// @lcpr case=end

// @lcpr case=start
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]\n[[[1,3]],[],[],[],[],[]]\n
// @lcpr case=end

 */
