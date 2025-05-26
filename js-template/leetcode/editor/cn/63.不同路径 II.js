/*
 * @lc app=leetcode.cn id=63 lang=javascript
 * @lcpr version=30200
 *
 * [63] 不同路径 II
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    //dp[i][j]=从（0，0）起到dp[i][j]的路径数
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < m ; j++) {
            if (i == 0 && 0 === j) {
                continue;
            }
            if (obstacleGrid[i][j] === 1) {
                continue;
            }
            const downWard = j - 1 >= 0 ? dp[i][j - 1] : 0;
            const rightWard = i - 1 >= 0 ? dp[i - 1][j] : 0;
            dp[i][j] = downWard + rightWard;
        }
    }
    return dp[n - 1][m - 1];

};
// @lc code=end
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])


/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[0,0]]\n
// @lcpr case=end

 */

