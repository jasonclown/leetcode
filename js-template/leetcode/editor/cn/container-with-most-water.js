/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30104
 *
 * [11] 盛最多水的容器
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1,res = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(area, res);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */

