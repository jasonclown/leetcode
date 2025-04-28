/*
 * @lc app=leetcode.cn id=713 lang=javascript
 * @lcpr version=30104
 *
 * [713] 乘积小于 K 的子数组
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let left = 0, right = 0, valid = 1;
  let results = 0;
  while (right < nums.length) {
    const add = nums[right];
    right++;
    valid *= add;
    while (valid >= k && left<right) {
     
      const del = nums[left];
      left++;
      valid /= del;
    }
    // 当前的窗口[left,..,right]一定为符合条件的窗口，但是[left+1,..,right]到[right]也是符合条件的结果，其数量计算就是right-left。
    results += right - left;
  }
  return results;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [10,5,2,6]\n100\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n0\n
// @lcpr case=end

 */

