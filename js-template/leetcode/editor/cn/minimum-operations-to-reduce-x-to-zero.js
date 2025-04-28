/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 * @lcpr version=30104
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let left = 0,
    right = 0,
    valid = 0;
  const sum = nums.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  let longestLen = -1;
  while (right < nums.length) {
    valid += nums[right];
    right++;
    while (valid >= sum - x) {
      if (valid === sum - x) {
        longestLen = Math.max(longestLen, right - left);
      }
      const del = nums[left];
      left++;

      valid -= del;
    }
  }
  return longestLen === -1 ? longestLen : nums.length - longestLen;
};
// @lc code=end

// your test code here
minOperations([5, 6, 7, 8, 9], 4);

/*
// @lcpr case=start
// [1,1,4,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [5,6,7,8,9]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,20,1,1,3]\n10\n
// @lcpr case=end

 */
