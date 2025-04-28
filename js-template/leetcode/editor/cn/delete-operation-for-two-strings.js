/*
 * @lc app=leetcode.cn id=583 lang=javascript
 * @lcpr version=30104
 *
 * [583] 两个字符串的删除操作
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let m = word1.length, n = word2.length;
  // dp[i][j]= 让word1的[0...,i-1]与word2[0,...,j-1]相同所需的最小步数
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // badcase 当其中一个字符串为空时，另一个字符串变为空所需的最小步数就是其长度
  for (let i = 0, j = 0; i <= m || j <= n; i++, j++){
    if (i <= m) {
      dp[i][0] = i;
    }
    if (j <= n) {
      dp[0][j] = j;
    }
  }
  for (let i = 1; i <= m; i++){
    for (let j = 1; j <= n; j++){
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[m][n];

};
// @lc code=end

// your test code here
minDistance('sea','eat')


/*
// @lcpr case=start
// "sea"\n"eat"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"etco"\n
// @lcpr case=end

 */

