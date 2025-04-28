/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30104
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
const build = (
  val2Index,
  preorder,
  preStart,
  preEnd,
  inorder,
  inStart,
  inEnd
) => {
  if (preStart > preEnd) {
    return null;
  }
  const rootVal = preorder[preStart];
  const rootIndex = val2Index[rootVal];
  const root = new TreeNode(rootVal);
  root.left = build(
    val2Index,
    preorder,
    preStart + 1,
    // 难点在于计算出前序遍历中，哪部分属于左子树，哪部分属于右子树
    preStart + rootIndex - inStart,
    inorder,
    inStart,
    rootIndex - 1
  );
  root.right = build(
    val2Index,
    preorder,
    preStart + rootIndex - inStart + 1,
    preEnd,
    inorder,
    rootIndex + 1,
    inEnd
  );
  return root;
};
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const val2Index = inorder.reduce((acc, v, i) => {
    acc[v] = i;
    return acc;
  }, {});
  return build(
    val2Index,
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
