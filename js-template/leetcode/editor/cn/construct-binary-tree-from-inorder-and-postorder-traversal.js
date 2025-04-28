/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=30104
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
const build = (val2Index, inorder, iStart, iEnd, postorder, pStart, pEnd) => {
  if (iStart > iEnd) {
    return null;
  }
  const rootVal = postorder[pEnd];
  const rootIndex = val2Index[rootVal];
  const root = new TreeNode(rootVal);
  const leftSize = rootIndex - iStart;
  root.left = build(
    val2Index,
    inorder,
    iStart,
    rootIndex - 1,
    postorder,
    pStart,
    pStart + leftSize-1
  );
  root.right = build(
    val2Index,
    inorder,
    rootIndex + 1,
    iEnd,
    postorder,
    pStart + leftSize ,
    pEnd-1
  );
  return root;
};
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const val2Index = inorder.reduce((acc, val, index) => {
    acc[val] = index;
    return acc;
  }, {});
  return build(
    val2Index,
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
