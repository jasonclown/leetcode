/*
 * @lc app=leetcode.cn id=80 lang=javascript
 * @lcpr version=30104
 *
 * [80] 删除有序数组中的重复项 II
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // nums[0, ..., slow]设置为结果集合
  let slow = 0,
    fast = 0;
  const maxCount = 2;
  let eachCount = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    } else if (nums[slow] === nums[fast] && slow<fast && eachCount < maxCount) {
      slow++;
      nums[slow] = nums[fast];
    }
    eachCount++;
    fast++;
    if (fast < nums.length && nums[fast] !== nums[fast - 1]) {
      eachCount = 0;
    }
  }
  return slow + 1;
};
// @lc code=end

// your test code here
removeDuplicates([1,1,1,2,2,3])
/*
// @lcpr case=start
// [1,1,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,1,2,3,3]\n
// @lcpr case=end

 */
