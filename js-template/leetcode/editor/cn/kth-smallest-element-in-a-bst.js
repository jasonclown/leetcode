/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30104
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res = 0;
  let kk = 0;
  const getKNumber = (root) => {
    if (!root) {
      return;
    }
    getKNumber(root.left);
    kk++
    if (k === kk) {
      res = root.val;
      return;
    }
    getKNumber(root.right);
  }
  getKNumber(root);
  return res;

};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */

