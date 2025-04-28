/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 * @lcpr version=30104
 *
 * [1038] 从二叉搜索树到更大和树
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0;
  const traverse = (node) => {
    if (!node) {
      return;
    }
    traverse(node.right);
    sum += node.val;
    node.val = sum;
    traverse(node.left);
  }
  traverse(root);
  return root;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [0,null,1]\n
// @lcpr case=end

 */

