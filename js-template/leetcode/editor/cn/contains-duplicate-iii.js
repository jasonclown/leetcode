/*
 * @lc app=leetcode.cn id=220 lang=javascript
 * @lcpr version=30104
 *
 * [220] 存在重复元素 III
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let left = 0,
    right = 0,
    window = {};
  while (right < nums.length) {
    const add = nums[right];
  // 由于valueDiff可为0，因此需要使用valueDiff+1 作为分母，才可正常计算
    const bucket = Math.floor(add / (valueDiff+1));
    if (window[bucket] !== void 0) {
      return true;
    }
    if (
      window[bucket - 1] !== void 0 &&
      Math.abs(window[bucket - 1] - add) <= valueDiff
    ) {
      return true;
    }
    if (
      window[bucket + 1] !== void 0 &&
      Math.abs(window[bucket + 1] - add) <= valueDiff
    ) {
      return true;
    }
    window[bucket] = add;
    while (right - left >= indexDiff) {
      const del = nums[left];
      delete window[Math.floor(del / (valueDiff+1))];
      left++;
    }
    right++;
  }
  return false;
};
// @lc code=end

// your test code here
containsNearbyAlmostDuplicate([1,2,3,1], 3, 0);

/*
// @lcpr case=start
// [1,2,3,1]\n3\n0\n
// @lcpr case=end

// @lcpr case=start
// [1,5,9,1,5,9]\n2\n3\n
// @lcpr case=end

 */
