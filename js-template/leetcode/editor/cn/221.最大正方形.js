/*
 * @lc app=leetcode.cn id=221 lang=javascript
 * @lcpr version=30200
 *
 * [221] 最大正方形
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    // dp[i][j]=从matrix的(0,0)至（i，j）的最大正方形的边
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        dp[0][i] = matrix[0][i] - '0';
    }
    for (let i = 0; i < n; i++) {
        dp[i][0] = matrix[i][0] - '0';
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === '0') {
                continue;
            }
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
    }
    let max = dp[0][0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            max = Math.max(max, dp[i][j]);
        }
    }
    return max * max;
};
// @lc code=end



/*
// @lcpr case=start
// [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["0","1"],["1","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["0"]]\n
// @lcpr case=end

 */

