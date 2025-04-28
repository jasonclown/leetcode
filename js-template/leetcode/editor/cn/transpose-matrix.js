/*
 * @lc app=leetcode.cn id=867 lang=javascript
 * @lcpr version=30104
 *
 * [867] 转置矩阵
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // 原地翻转只用于方形矩阵，对于非方形矩阵，无效
  const row = matrix.length;
  const column = matrix[0].length;
  const newMatrix = new Array(column);
  for (let i = 0; i < column; i++){
    newMatrix[i] = new Array(row);
  }
  for (let i = 0; i < row; i++){
    for (let j = 0; j < column; j++){
      newMatrix[j][i] = matrix[i][j]
    }
  }
  return newMatrix
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */

