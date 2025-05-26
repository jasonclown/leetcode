/*
 * @lc app=leetcode.cn id=474 lang=javascript
 * @lcpr version=30200
 *
 * [474] 一和零
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    //dp[i][j][k]=前i个字符，能装下j个0和k个1的最大字符串长度
    const dp = Array.from({ length: strs.length + 1 }, () => Array.from({ length: m + 1 }, () => Array(n + 1).fill(0)));
    for (let i = 1; i <= strs.length; i++) {
        const [zeroCount, oneCount] = [...strs[i - 1]].reduce((acc, cur) => {
            if (cur === '0') {
                acc[0]++;
            } else if (cur === '1') {
                acc[1]++;
            }
            return acc;
        }, [0, 0]);
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                if (j - zeroCount >= 0 && k - oneCount >= 0) {
                    dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeroCount][k - oneCount] + 1);
                } else {
                    dp[i][j][k] = dp[i - 1][j][k];
                }
            }
        }
    }
    return dp[strs.length][m][n]

};
// @lc code=end
findMaxForm(["10", "0001", "111001", "1", "0"],
    5,
    3)


/*
// @lcpr case=start
// ["10", "0001", "111001", "1", "0"]\n5\n3\n
// @lcpr case=end

// @lcpr case=start
// ["10", "0", "1"]\n1\n1\n
// @lcpr case=end

 */

