/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30104
 *
 * [236] 二叉树的最近公共祖先
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 定义：返回节点q和节点p在该二叉树中的最近的公共祖先节点，如果没有找到则返回null
  if (!root) {
    return root;
  }
  if (p === root || q === root) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right === null) {
    return null;
  }
  if (left !== null && right !== null) {
    return root;
  }
  // left，right有一个为null分为两种情况：
  // 1. 公共祖先都在root的left或者right中，那不为null的那个就是祖先节点
  // 2. left或者right不在root下，那在该二叉树中，最近的公共节点就是不为null的那个节点
  return left === null ? right : left;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */

