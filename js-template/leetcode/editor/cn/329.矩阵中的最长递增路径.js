/*
 * @lc app=leetcode.cn id=329 lang=javascript
 * @lcpr version=30200
 *
 * [329] 矩阵中的最长递增路径
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    const n = matrix.length, m = matrix[0].length;
    //dp[i][j]=从（0，0）到（i，j）的最长递增路径的长度
    const dp = Array.from({ length: n }, () => Array(m).fill(1));
    let max = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const curNum = matrix[i][j];
            const up = i - 1 >= 0 && curNum < matrix[i - 1][j] ? dp[i - 1][j] : 0;
            const bottom = i + 1 < n && curNum < matrix[i + 1][j] ? dp[i + 1][j] : 0;
            const left = j - 1 >= 0 && curNum < matrix[i][j - 1] ? dp[i][j - 1] : 0;
            const right = j + 1 < m && curNum < matrix[i][j + 1] ? dp[i][j + 1] : 0;
            dp[i][j] = Math.max(up, bottom, left, right) + 1;
            max = Math.max(max, dp[i][j]);
        }
    }
    return max;
};
// @lc code=end
longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])


/*
// @lcpr case=start
// [[9,9,4],[6,6,8],[2,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,4,5],[3,2,6],[2,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1]]\n
// @lcpr case=end

 */

