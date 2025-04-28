/*
 * @lc app=leetcode.cn id=222 lang=javascript
 * @lcpr version=30104
 *
 * [222] 完全二叉树的节点个数
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
const getHeight = (root,isLeft) => {
  if (!root) {
    return 0;
  }
  let height = 0;
  while (root) {
    height++;
    root = isLeft ? root.left : root.right;
  }
  return height;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  const lHeight = getHeight(root, true);
  const rHeight = getHeight(root, false);
  if (lHeight === rHeight) {
    return Math.pow(2, lHeight) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

