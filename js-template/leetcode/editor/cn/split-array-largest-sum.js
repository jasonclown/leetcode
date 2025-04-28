/*
 * @lc app=leetcode.cn id=410 lang=javascript
 * @lcpr version=30104
 *
 * [410] 分割数组的最大值
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
const calcCount = (nums, maxSum) => {
  let count = 1,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > maxSum) {
      count++;
      sum = 0;
    }
    sum += nums[i];
  }
  return count;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  // 遇到最小化最大值和最大化最小值，都是用二分
  let left = 0, right = 0;
  for (const n of nums) {
    left = Math.max(n, left);
    right += n;
  }
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (calcCount(nums, mid) <= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [7,2,5,10,8]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,4,4]\n3\n
// @lcpr case=end

 */
