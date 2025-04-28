/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30104
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // if (!root) {
  //   return root;
  // }
  // flatten(root.left);
  // flatten(root.right);
  // let head = root;
  // const right = head.right;
  // const left = head.left;

  // head.left = null;
  // head.right = left;

  // while (head.right != null) {
  //   head = head.right;
  // }
  // head.right = right;

  // return root;

  if (!root) {
    return null;
  }
  const left = flatten(root.left);
  const right = flatten(root.right);
  root.right = left;
  root.left = null;
  let head = root;
  while (head.right) {
    head = head.right;
  }
  head.right = right;
  return root;
};
// @lc code=end

// your test code here
const tree = TreeNode.createRoot([1, 2, 5, 3, 4, null, 6]);
flatten(tree);
/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
