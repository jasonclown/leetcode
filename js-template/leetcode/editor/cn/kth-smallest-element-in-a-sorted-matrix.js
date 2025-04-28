/*
 * @lc app=leetcode.cn id=378 lang=javascript
 * @lcpr version=30104
 *
 * [378] 有序矩阵中第 K 小的元素
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start

const checkCount = (matrix,k,mid,len) => {
  let i = len - 1;
  let j = 0;
  let count = 0; // 统计
  while (i >= 0 && j < len) {
    if (matrix[i][j] <= mid) {
      // 当第i行第j列的元素比中间值小，说明0到i的i+1个元素都比mid小。
      count += i + 1;
      j++;
    } else {
      // 由于是要找第k位大的数，该条件下可能找不到第k位。
      i--;
    }
  }
  return count >= k;
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const len = matrix.length ;
  let min = matrix[0][0];
  let max = matrix[len - 1][len - 1];

  while (min < max) {
    const mid = min + (Math.floor((max - min) / 2));
    if (checkCount(matrix, k, mid, len)) {
      // 比mid小的数大于等于k个，可以从左侧继续寻找是有有等于k个的mid值。
      max = mid;
    } else {
      // 比mid小的数没有超过k个，可以从右侧继续寻找是否有等于k个的mid值。
      min = mid + 1;
    }
  }
  // 结束条件：mid=max，由于k一定小于n，所有k一定存在，就是min或max
  return min;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [[1,5,9],[10,11,13],[12,13,15]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[-5]]\n1\n
// @lcpr case=end

 */

