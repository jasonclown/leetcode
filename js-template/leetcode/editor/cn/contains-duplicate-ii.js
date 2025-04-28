/*
 * @lc app=leetcode.cn id=219 lang=javascript
 * @lcpr version=30104
 *
 * [219] 存在重复元素 II
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let left = 0,
    right = 0,
    window = {};
  while (right < nums.length) {
    const add = nums[right];
    right++;
    if (window[add] == 1) {
      return true;
    }
    window[add] = 1;
    while (right - left > k) {
      const del = nums[left];
      left++;
      window[del]--;
    }
  }
  return false;
};
// @lc code=end

// your test code here
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */
