/*
 * @lc app=leetcode.cn id=235 lang=javascript
 * @lcpr version=30104
 *
 * [235] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor = function(root, p, q) {
  // if (!root) {
  //   return root;
  // }
  // if (p === root || q === root) {
  //   return root;
  // }
  // const left = lowestCommonAncestor(root.left, p, q);
  // const right = lowestCommonAncestor(root.right, p, q);
  // if (left === null && right === null) {
  //   return null;
  // }
  // if (left !== null && right !== null) {
  //   return root;
  // }
  // return left === null ? right : left;
  if (!root) {
    return root;
  }
  if (p.val > q.val) {
    return lowestCommonAncestor(root, q, p);
  }
  if (p.val <= root.val && q.val >= root.val) {
    return root;
  }
  if (root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\n
// @lcpr case=end

// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\n
// @lcpr case=end

 */

