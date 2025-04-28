/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30104
 *
 * [209] 长度最小的子数组
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0, valid = 0, shortest = Infinity;
  while (right < nums.length) {
    const add = nums[right];
    right++;
    valid += add;
    while (valid >= target) {
        shortest = Math.min(shortest, right - left);
      const del = nums[left];
      left++;
      valid -= del;
    }
  }
  return shortest === Infinity ? 0 : shortest;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

