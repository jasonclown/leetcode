/*
 * @lc app=leetcode.cn id=95 lang=javascript
 * @lcpr version=30104
 *
 * [95] 不同的二叉搜索树 II
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return [];
  // dp 数组用于存储不同节点数量下的所有可能的二叉搜索树
  const dp = new Array(n + 1).fill(0).map(() => []);
  dp[0].push(null);

  // 逐步增加节点数量
  for (let nodes = 1; nodes <= n; nodes++) {
      for (let rootVal = 1; rootVal <= nodes; rootVal++) {
          const leftNodes = rootVal - 1;
          const rightNodes = nodes - rootVal;

          // 遍历左子树的所有可能结构
          for (const leftTree of dp[leftNodes]) {
              // 遍历右子树的所有可能结构
              for (const rightTree of dp[rightNodes]) {
                  const root = new TreeNode(rootVal);
                  // 复制左子树
                  root.left = leftTree;
                  // 复制并调整右子树节点的值
                  root.right = cloneTree(rightTree, rootVal);
                  dp[nodes].push(root);
              }
          }
      }
  }

  return dp[n];
};

// 辅助函数：复制树并调整节点的值
function cloneTree(node, offset) {
  if (!node) return null;
  const newNode = new TreeNode(node.val + offset);
  newNode.left = cloneTree(node.left, offset);
  newNode.right = cloneTree(node.right, offset);
  return newNode;
} 
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

