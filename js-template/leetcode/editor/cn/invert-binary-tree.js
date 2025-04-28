/*
 * @lc app=leetcode.cn id=226 lang=javascript
 * @lcpr version=30104
 *
 * [226] 翻转二叉树
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root; 
  }
  const leftChildren = invertTree(root.left);
  const rightChildren = invertTree(root.right);
  root.right = leftChildren;
  root.left = rightChildren;
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
