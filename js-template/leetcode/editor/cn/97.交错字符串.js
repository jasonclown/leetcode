/*
 * @lc app=leetcode.cn id=97 lang=javascript
 * @lcpr version=30200
 *
 * [97] 交错字符串
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    /**
     * 状态定义：
dp[i][j] 表示 s1 的前 i 个字符和 s2 的前 j 个字符是否能交错组成 s3 的前 i+j 个字符。
状态转移：
如果 s1[i-1] == s3[i+j-1]，则 dp[i][j] 取决于 dp[i-1][j]。
如果 s2[j-1] == s3[i+j-1]，则 dp[i][j] 取决于 dp[i][j-1]。
状态转移方程：dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1])。
     */
    const m = s1.length;
    const n = s2.length;
    const l = s3.length;
    if (m + n !== l) {
        return false;
    }
    //dp[i][j]=s1的前i个字符与s2的前j个字符是否能交叉组成s3的前i+j个字符
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= n; i++) {
        dp[0][i] = dp[0][i - 1] && s3[i - 1] === s2[i - 1];
    }
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s3[i - 1] === s1[i - 1];
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) || (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1])
        }
    }
    return dp[m][n];

};
// @lc code=end



/*
// @lcpr case=start
// "aabcc"\n"dbbca"\n"aadbbcbcac"\n
// @lcpr case=end

// @lcpr case=start
// "aabcc"\n"dbbca"\n"aadbbbaccc"\n
// @lcpr case=end

// @lcpr case=start
// ""\n""\n""\n
// @lcpr case=end

 */

