/*
 * @lc app=leetcode.cn id=120 lang=javascript
 * @lcpr version=30200
 *
 * [120] 三角形最小路径和
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const n = triangle.length;
    // dp[i]=从0...i层的最小路径和
    const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));
    dp[0][0] = triangle[0][0];
    for (let i = 1; i < n; i++) {
        const row = triangle[i];
        for (let j = 0; j < row.length; j++) {
            const upperLeft = j - 1 >= 0 ? dp[i - 1][j - 1] : Infinity;
            const upperRight = dp[i - 1][j];
            dp[i][j] = Math.min(upperLeft, upperRight) + row[j];
        }
    }
    const minResult = Math.min(...dp[n - 1]);
    return minResult;
};
// @lc code=end
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])


/*
// @lcpr case=start
// [[2],[3,4],[6,5,7],[4,1,8,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[-10]]\n
// @lcpr case=end

 */

