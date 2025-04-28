/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30104
 *
 * [54] 螺旋矩阵
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let index = 0;
  const res = [];
  const n = matrix.length;
  const m = matrix[0].length;
  const len = n * m;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = m - 1;
  while (index < len) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res[index++] = matrix[top][i];
      }
      top++;
    }
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res[index++] = matrix[i][right];
      }
      right--;
    }
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res[index++] = matrix[bottom][i];
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res[index++] = matrix[i][left];
      }
      left++;
    }
  }
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */
