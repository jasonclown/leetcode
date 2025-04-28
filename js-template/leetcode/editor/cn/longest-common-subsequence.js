/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 * @lcpr version=30104
 *
 * [1143] 最长公共子序列
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0)); // dp[i][j]定义： text1从[0...i-1]和text2从[0..j-1]的最长公共子序列的长度。
  // badcase
  // for (let i = 0; i < m; i++) {
  //   dp[i][0] = 0;
  // }
  // for (let j = 0; j < n; j++) {
  //   dp[0][j] = 0;
  // }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "abcde"\n"ace"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"def"\n
// @lcpr case=end

 */
