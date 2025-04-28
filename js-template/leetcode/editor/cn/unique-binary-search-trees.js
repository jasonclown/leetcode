/*
 * @lc app=leetcode.cn id=96 lang=javascript
 * @lcpr version=30104
 *
 * [96] 不同的二叉搜索树
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 初始化一维数组 dp，dp[i] 表示有 i 个节点时能构建的不同二叉搜索树的数量
  const dp = new Array(n + 1).fill(0);
  // 0 个节点和 1 个节点时，都只有一种构建方式
  dp[0] = 1;
  dp[1] = 1;

  // 从 2 个节点开始递推
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // j：以j为根节点
      // 状态转移方程：dp[i] 等于以每个节点为根节点时，左右子树构建方式的乘积之和
      // 左子树能构建的数量：当j从1开始算起：dp[j-1]， 当j从0开始算起：dp[j]
      // 右子树能构建的数量：当j从0开始算起：dp[i-j]，当J从0开始算起:dp[i-j-1]
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
