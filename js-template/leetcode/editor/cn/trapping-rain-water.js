/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30104
 *
 * [42] 接雨水
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  const lMaxHeights = new Array(len).fill(0);
  const rMaxHeights = new Array(len).fill(0);
  let res = 0;
  lMaxHeights[0] = height[0];
  rMaxHeights[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
    lMaxHeights[i] = Math.max(lMaxHeights[i - 1], height[i]);
  }
  for (let i = len - 2; i >= 0; i--) {
    rMaxHeights[i] = Math.max(rMaxHeights[i+1], height[i]);
  }
  for (let i = 1; i < len-1; i++) {
    const diff = Math.min(lMaxHeights[i], rMaxHeights[i]) - height[i];
    res += diff;
  }
  return res;
};
// @lc code=end

// your test code here
trap([0,1,0,2,1,0,1,3,2,1,2,1])
/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */
