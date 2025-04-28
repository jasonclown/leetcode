/*
 * @lc app=leetcode.cn id=977 lang=javascript
 * @lcpr version=30104
 *
 * [977] 有序数组的平方
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 双指针技巧，从头尾一起合并降序数组
  let newNums = [];
  let left = 0,
    right = nums.length - 1,
    i = nums.length - 1;
  while (left < right) {
    const leftSquare = Math.pow(nums[left], 2);
    const rightSquare = Math.pow(nums[right], 2);
    if (leftSquare > rightSquare) {
      newNums[i] = leftSquare;
      left++;
    } else {
      newNums[i] = rightSquare;
      right--;
    }
    i--;
  }
  newNums[i] = Math.pow(nums[left], 2);
  return newNums;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [-4,-1,0,3,10]\n
// @lcpr case=end

// @lcpr case=start
// [-7,-3,2,3,11]\n
// @lcpr case=end

 */
