/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30104
 *
 * [59] 螺旋矩阵 II
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let index = 0;
  const len = n * n;
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  while (index < len) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = index + 1;
        index++;
      }
      top++;
    }
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = index + 1;
        index++;
      }
      right--;
    }
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = index + 1;
        index++;
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = index + 1;
        index++;
      }
      left++;
    }
  }
  return matrix
};
// @lc code=end

// your test code here
generateMatrix(3)
/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
