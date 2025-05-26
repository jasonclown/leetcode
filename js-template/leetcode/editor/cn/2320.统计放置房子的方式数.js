/*
 * @lc app=leetcode.cn id=2320 lang=javascript
 * @lcpr version=30200
 *
 * [2320] 统计放置房子的方式数
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function (n) {
    // 10^9+7已经超出了number的范围，所以需要用bigInt来
    const MOD = BigInt(1e9 + 7);

    // dp[i][0]=前i块地中第i块不放的方案数
    // dp[i][1]=前i块地中第i块放的方案数
    const dp = Array.from({ length: n + 1 }, () => Array(2));
    dp[1][0] = 1n; // 需要使用bigint才能与bigint做运算
    dp[1][1] = 1n;
    for (let i = 2; i <= n; i++) {
        // i块地不放置=i-1块地放置的方案数+i-1块地不放置的方案数
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][0]) % MOD;
        // i块地放置=i-1块地不放置的方案数
        dp[i][1] = dp[i - 1][0] % MOD;
    }
    const single = (dp[n][0] + dp[n][1]) % MOD;
    return Number((single * single) % MOD);
};
// @lc code=end

countHousePlacements(100)

/*
// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */

