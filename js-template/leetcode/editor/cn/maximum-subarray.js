/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30104
 *
 * [53] 最大子数组和
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //dp[i]表示以i为结尾的连续最大和
  const dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const pre = dp[i - 1] + num;
    // 连续体现在如果值没有一直变大，那就从当前值开始重新和
    dp[i] = Math.max(pre, num);
  }
  let res = -Infinity;
  for (let i = 0; i < nums.length; i++){
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end

// your test code here
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */
