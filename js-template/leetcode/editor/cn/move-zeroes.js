/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30104
 *
 * [283] 移动零
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
const swap = (nums, i, j) => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0, fast = 0;
  while (fast < nums.length) {
    if (nums[fast] === 0) {
      fast++;
    } else {
      swap(nums, slow, fast);
      slow++;
      fast++;
    }
  }
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

