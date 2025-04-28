/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30104
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 验证二叉搜索树需要从定义或者特征出发：
  // 定义：左子树的所有值都小于根节点，右子树的所有值都大于根节点
  // 特征： 二叉搜索树的中序遍历是一个递增序列
  const judge = (root, min, max) => {
    if (!root) {
      return true;
    }
    if (min && min.val >= root.val) {
      return false;
    }
    if (max && max.val <= root.val) {
      return false;
    }
    return judge(root.left, min, root) && judge(root.right, root, max);
  };
  // return judge(root, null, null);

  let pre;
  const traverse = (root) => {
    if (!root) {
      return true;
    }
    if (!traverse(root.left)) {
      return false;
    }
    if (pre && pre.val >= root.val) {
      return false;
    }
    pre = root;
    return traverse(root.right);
  };
  return traverse(root);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */
