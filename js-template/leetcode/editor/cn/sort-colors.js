/*
 * @lc app=leetcode.cn id=75 lang=javascript
 * @lcpr version=30104
 *
 * [75] 颜色分类
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    //   // 选择排序
    //   let min = i;
    //   for (let j = i+1; j < nums.length; j++){
    //     if (nums[min] > nums[j]) {
    //       min = j;
    //     }
    //   }
    //   if (min !== i) {
    //     const tmp = nums[i];
    //      nums[i] = nums[min];
    //     nums[min] = tmp;
    //   }
    // 冒泡排序
    let hasChange = false;
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] < nums[j - 1]) {
        const tmp = nums[j];
        nums[j] = nums[j - 1];
        nums[j-1] = tmp;
        hasChange = true;
      }
    }
    if (!hasChange) {
      break;
    }
  }
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [2,0,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,0,1]\n
// @lcpr case=end

 */
