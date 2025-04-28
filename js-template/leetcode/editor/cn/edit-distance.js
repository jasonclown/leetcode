/*
 * @lc app=leetcode.cn id=72 lang=javascript
 * @lcpr version=30104
 *
 * [72] 编辑距离
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  n = word2.length;
  // dp[i][j] = 修改word1[0...i-1]和word2【0...j-1]所需要的最小操作数
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // badcase： 当word1为空字符串或者word2为空字符串时，对应的操作数就是另一个字符串的长度
  for (let i = 1, j = 1; i <= m || j <= n; i++, j++) {
    if (i <= m) {
      dp[i][0] = i;
    }
    if (j <= n) {
      dp[0][j] = j;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

// your test code here
minDistance("horse", "ros");
/*
// @lcpr case=start
// "horse"\n"ros"\n
// @lcpr case=end

// @lcpr case=start
// "intention"\n"execution"\n
// @lcpr case=end

 */
