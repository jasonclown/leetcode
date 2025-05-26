/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 * @lcpr version=30200
 *
 * [1049] 最后一块石头的重量 II
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    const sum = stones.reduce((acc, weight) => acc += weight, 0);
    const halfSum = Math.floor(sum / 2);
    // dp=使用前i块石头，背包容量为j时，能够装的最大重量
    const dp = Array.from({ length: stones.length + 1 }, () => Array(halfSum + 1).fill(0));
    for (let i = 1; i <= stones.length; i++) {
        const curWeight = stones[i - 1];
        for (let j = 0; j <= halfSum; j++) {

            if (j >= curWeight) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - curWeight] + curWeight);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    const maxWeight = dp[stones.length][halfSum];
    return sum - maxWeight - maxWeight;
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,4,1,8,1]\n
// @lcpr case=end

// @lcpr case=start
// [31,26,33,21,40]\n
// @lcpr case=end

 */

