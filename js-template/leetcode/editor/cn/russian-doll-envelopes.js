/*
 * @lc app=leetcode.cn id=354 lang=javascript
 * @lcpr version=30104
 *
 * [354] 俄罗斯套娃信封问题
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let res = 1;
  const sorted = envelopes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
  });
  const heights = [];
  for (let i = 0; i < sorted.length; i++){
    heights[i] = sorted[i][1];
  }
  const top = [];
  for (let i = 0; i < heights.length; i++){
    // 二分是在top数组中进行，注意right和边界判断均使用的是top相关属性
    let left = 0, right = top.length - 1;
    const height = heights[i];
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (top[mid] < height) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (left === top.length) {
      top.push(height);
    } else {
      top[left] = height;
    }
  }
  return top.length;
};
// @lc code=end

// your test code here
maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]);

/*
// @lcpr case=start
// [[5,4],[6,4],[6,7],[2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,1],[1,1]]\n
// @lcpr case=end

 */
