/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * @lcpr version=30104
 *
 * [322] 零钱兑换
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const dp = (coins, amount, map1) => {
  let res = Infinity;

  // 根据输入金额amount，返回凑出amount金额的硬币数最少是多少
  if (amount === 0) {
    return 0;
  }
  if (amount < 0) {
    return -1;
  }
  if (map1[amount] !== undefined) {
    return map1[amount];
  }
  for (coin of coins) {
    const subAmount = dp(coins, amount - coin, map1);
    if (subAmount === -1) {
      continue;
    }

    res = Math.min(subAmount + 1, res);
  }
  const result = res === Infinity ? -1 : res;
  if (map1[amount] === undefined) {
    map1[amount] = result;
  }
  return result;
};
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 1.递归
  // const map1 = {};

  // const res = dp(coins, amount, map1);
  // return res;

  //2.迭代
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i - coin]+1, dp[i]);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
// @lc code=end

// your test code here
coinChange([1,2,5],11);
/*
// @lcpr case=start
// [1, 2, 5]\n11\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */
