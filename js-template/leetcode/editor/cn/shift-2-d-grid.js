/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 * @lcpr version=30104
 *
 * [1260] 二维网格迁移
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
const getRowAndColumnIndex = (grid, index) => {
  const column = grid[0].length;
  const i = Math.floor(index / column);
  const j = index % column;
  return [i, j];
}
const get = (grid, index) => {
  const[i, j] = getRowAndColumnIndex(grid, index);
  return grid[i][j]
}
const set = (grid, index, val) => {
  const[i, j] = getRowAndColumnIndex(grid, index);
  grid[i][j] = val;
}
const revert = (grid, i, j) => {
  while (i < j) {
    const tmp = get(grid,i);
    set(grid, i, get(grid, j));
    set(grid, j, tmp);
    i++;
    j--;
  }
}

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const len = n * m;
  // k可能超出二维数组长度限制，需要取模
  k = k % len;
  // 链表完全翻转
  revert(grid, 0, len - 1);
  // 前k个元素进行翻转
  revert(grid, 0, k-1);
  // k到最后一个元素进行翻转
  revert(grid, k, len - 1);

  
  return grid;
};
// @lc code=end

// your test code here
shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]],1);


/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]\n4\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n9\n
// @lcpr case=end

 */

