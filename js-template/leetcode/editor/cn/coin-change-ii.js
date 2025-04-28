/*
 * @lc app=leetcode.cn id=518 lang=javascript
 * @lcpr version=30104
 *
 * [518] 零钱兑换 II
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const len = coins.length;
  //dp[i][j]: 前i个硬币组成j总金额的组合数
  const dp = Array.from({ length: len + 1 }, () =>
    new Array(amount + 1).fill(0)
  );
  //badcase，当j=0时，组合数都是0
  for (let i = 0; i <= len; i++){
    dp[i][0] = 1;
  }
  for (let i = 1; i <= len; i++){
    const n = coins[i-1];
    for (let j = 1; j <= amount; j++){
      if (j - n >= 0) {
        // 余额够,可以选择用或者不用
        dp[i][j] = dp[i][j - n] +  dp[i - 1][j];
      } else {
        // 余额不够，只能选择不用
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[len][amount];
 
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 5\n[1, 2, 5]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[2]\n
// @lcpr case=end

// @lcpr case=start
// 10\n[10]\n
// @lcpr case=end

 */
