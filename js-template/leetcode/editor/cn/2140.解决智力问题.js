/*
 * @lc app=leetcode.cn id=2140 lang=javascript
 * @lcpr version=30200
 *
 * [2140] 解决智力问题
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const len = questions.length;

    // dp[i]=从第i个问题开始计算所能获得的最大分数
    const dp = Array.from({ length: questions.length });
    dp[len - 1] = questions[len - 1][0];
    if (len === 1) {
        return dp[0];
    }
    for (let i = len - 2; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], questions[i][0] + (dp[i + questions[i][1] + 1] || 0));
    }
    return dp[0];
};
// @lc code=end

mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]])

/*
// @lcpr case=start
// [[3,2],[4,3],[4,4],[2,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,2],[3,3],[4,4],[5,5]]\n
// @lcpr case=end

 */

