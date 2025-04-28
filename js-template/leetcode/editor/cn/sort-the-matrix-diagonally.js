/*
 * @lc app=leetcode.cn id=1329 lang=javascript
 * @lcpr version=30104
 *
 * [1329] 将矩阵按对角线排序
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const n = mat.length;
  const m = mat[0].length;
  const obj = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const key = i - j;
      if (!obj[key]) {
        obj[key] = [];
      }
      obj[key].push(mat[i][j]);
    }
  }
  Object.keys(obj).forEach((key) => {
    obj[key] = obj[key].sort((a, b) => b-a);
  });
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const key = i - j;
      mat[i][j] = obj[key].pop();
    }
  }
  return mat;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [[3,3,1,1],[2,2,1,2],[1,1,1,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]\n
// @lcpr case=end

 */
