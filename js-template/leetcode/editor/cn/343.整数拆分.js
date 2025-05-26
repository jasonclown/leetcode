/*
 * @lc app=leetcode.cn id=343 lang=javascript
 * @lcpr version=30200
 *
 * [343] 整数拆分
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // dp[i]=将i拆分为k个正整数的乘积最大值
    const dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            //两种情况，
            // j和i-j不再进行拆分的乘积
            // i-j再进行拆分后与j的乘积。
            // 两种情况比较大小。
            dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
        }
    }
    return dp[n];
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

