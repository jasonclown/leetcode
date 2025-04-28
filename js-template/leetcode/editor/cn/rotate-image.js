/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30104
 *
 * [48] 旋转图像
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++){
    for (let j = i; j < n; j++){
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
 matrix.forEach(row => {
    let left = 0, right = n - 1;
    while (left < right) {
      const tmp = row[left];
      row[left] = row[right];
      row[right] = tmp;
      left++;
      right--;
    }
    return row;
  });
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */

