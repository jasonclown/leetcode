/*
 * @lc app=leetcode.cn id=654 lang=javascript
 * @lcpr version=30104
 *
 * [654] 最大二叉树
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
const buildMaxtree = (nums, i, j) => {
  if (i > j) {
    return null;
  }
  if (i === j) {
    return new TreeNode(nums[i]);
  }
  let maxIndex = i;
  let max = nums[i];
  for (let k = i; k <= j; k++) {
    if (max < nums[k]) {
      max = nums[k];
      maxIndex = k;
    }
  }
  const node = new TreeNode(max);
  const left = buildMaxtree(nums, i, maxIndex - 1);
  const right = buildMaxtree(nums, maxIndex + 1, j);
  node.left = left;
  node.right = right;
  return node;
};
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return buildMaxtree(nums, 0, nums.length - 1);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,2,1,6,0,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

 */
