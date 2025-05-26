/*
 * @lc app=leetcode.cn id=2611 lang=javascript
 * @lcpr version=30200
 *
 * [2611] 老鼠和奶酪
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
    // const n = reward1.length;
    // //dp[i][j]=第一只老鼠吃前i块奶酪时，恰好吃掉k块奶酪情况下，最大分数
    // const dp = Array.from({ length: n + 1 }, () => Array(k+1).fill(-Infinity));
    // dp[0][0] = 0;
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 0; j <= Math.min(k, i); j++) {
    //         // 奶酪i给第二只老鼠
    //         if (dp[i - 1][j] !== -Infinity) {
    //             dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + reward2[i - 1]);
    //         }
    //         // 奶酪i给第一只老鼠
    //         if (j > 0 && dp[i - 1][j - 1] !== -Infinity) {
    //             dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + reward1[i - 1]);
    //         }
    //     }
    // }
    // return dp[n][k];
    const diff = Array.from({ length: reward1.length }, () => Array(2));
    for (let i = 0; i < reward1.length; i++) {
        diff[i][0] = reward1[i] - reward2[i];
        diff[i][1] = i;
    }
    diff.sort((a, b) => b[0] - a[0]);
    let result = 0;
    for (let i = 0; i < k; i++) {
        result += reward1[diff[i][1]];
    }
    for (let i = k; i < reward1.length; i++) {
        result += reward2[diff[i][1]];
    }
    return result;

};
// @lc code=end
miceAndCheese([1, 1, 3, 4],
    [4, 4, 1, 1],
    2
)


/*
// @lcpr case=start
// [1,1,3,4]\n[4,4,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n[1,1]\n2\n
// @lcpr case=end

 */

