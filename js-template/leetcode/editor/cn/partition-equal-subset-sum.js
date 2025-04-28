/*
 * @lc app=leetcode.cn id=416 lang=javascript
 * @lcpr version=30104
 *
 * [416] 分割等和子集
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    //dp[i][j]定义：第[0..i]个元素的在上限和为j的情况下是否能刚好达到j
  const sum = nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const halfSum = sum / 2;
  const dp = Array.from({ length: nums.length + 1 }, () => new Array(halfSum + 1).fill(false));
  // badcase: j为0的情况下，不管i为何值，都可以通过选择不塞入达到j=0的情况
  for (let i = 0; i < nums.length; i++){
    dp[i][0] = true;
  }

  for (let i = 1; i <= nums.length; i++){
    const num = nums[i];
    for (let j = 1; j <= halfSum ; j++){
      if (j - num >= 0) {
        // 第i个元素能够被塞入，可以选择塞入或者不塞入。
        dp[i][j] = dp[i-1][j - num] || dp[i-1][j];
      } else {
        // 第i个元素不能被塞入，只能选择不塞入。
        dp[i][j] = dp[i-1][j];
      }
    }
  }
  return dp[nums.length][halfSum];
};
// @lc code=end

// your test code here
canPartition([1, 5, 11, 5]);


/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */

