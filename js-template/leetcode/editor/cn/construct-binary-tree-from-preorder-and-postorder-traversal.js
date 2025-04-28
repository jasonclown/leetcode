/*
 * @lc app=leetcode.cn id=889 lang=javascript
 * @lcpr version=30104
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const val2Index = postorder.reduce((acc, val, index) => {
    acc[val] = index;
    return acc;
  }, {});
  const build = (preorder, pStart, pEnd, postorder, poStart, poEnd) => {
    if (pStart > pEnd) {
      return null;
    }

    const rootVal = preorder[pStart];
    if (pStart === pEnd) {
      // 防止后续pStart+1溢出
      return new TreeNode(rootVal);
    }
    const leftRootVal = preorder[pStart + 1];
    // 左子树的根节点所在位置
    const leftRootIndex = val2Index[leftRootVal];
    // +1 是因为这算的是左子树的子树范围，要把左子树也算上
    const leftSize = leftRootIndex - poStart + 1;
    const root = new TreeNode(rootVal);
    root.left = build(
      preorder,
      pStart + 1,
      pStart + leftSize,
      postorder,
      poStart,
      leftRootIndex
    );
    root.right = build(
      preorder,
      pStart + leftSize + 1,
      pEnd,
      postorder,
      leftRootIndex + 1,
      poEnd - 1
    );
    return root;
  };
  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n[1]\n
// @lcpr case=end

 */
