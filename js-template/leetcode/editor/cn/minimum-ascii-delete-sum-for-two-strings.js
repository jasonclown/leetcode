/*
 * @lc app=leetcode.cn id=712 lang=javascript
 * @lcpr version=30104
 *
 * [712] 两个字符串的最小ASCII删除和
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let m = s1.length,
    n = s2.length;
  // dp[i][j]= 让word1的[0...,i-1]与word2[0,...,j-1]相同所需删除字符的ascll值的最小和
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // badcase 当其中一个字符串为空时，另一个字符串变为空所需的ascll值最小和为字符串本身的ascll值的和
  dp[0][0] = 0;
  for (let i = 1, j = 1; i <= m || j <= n; i++, j++) {
    if (i <= m) {
      let charCode = s1.charCodeAt(i-1);
      charCode += dp[i - 1][0];
      dp[i][0] = charCode;
    }
    if (j <= n) {
      let charCode = s2.charCodeAt(j-1);
      charCode += dp[0][j - 1];
      dp[0][j] = charCode;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j - 1] + s2.charCodeAt(j-1),
          dp[i - 1][j] + s1.charCodeAt(i-1)
        );
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

// your test code here
minimumDeleteSum("sea", "eat");
/*
// @lcpr case=start
// "sea"\n"eat"\n
// @lcpr case=end

// @lcpr case=start
// "delete"\n"leet"\n
// @lcpr case=end

 */
