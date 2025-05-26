/*
 * @lc app=leetcode.cn id=1262 lang=javascript
 * @lcpr version=30200
 *
 * [1262] 可被三整除的最大和
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
    const n = nums.length;
    //dp[i]无法分解为子问题，只能引入j变量
    // dp[i][j]=前i项,被3整除余j的元素最大和
    const dp = Array.from({ length: nums.length + 1 }, () => Array(3).fill(0));
    // const numSums = nums.reduce((acc, cur, index) => {
    //     acc[index + 1] = acc[index] + cur;
    //     return acc;
    // }, [0]);
    // dp[1] = nums[0] % 3 === 0 ? nums[0] : 0;
    dp[0][0] = 0;
    dp[0][1] = Number.MIN_SAFE_INTEGER;
    dp[0][2] = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {

        let curNum = nums[i - 1];
        if (curNum % 3 === 0) {
            dp[i][0] = curNum + dp[i - 1][0];
            dp[i][1] = curNum + dp[i - 1][1];
            dp[i][2] = curNum + dp[i - 1][2];
        } else if (curNum % 3 === 1) {
            dp[i][0] = Math.max(curNum + dp[i - 1][2], dp[i - 1][0]);
            dp[i][1] = Math.max(curNum + dp[i - 1][0], dp[i - 1][1]);
            dp[i][2] = Math.max(curNum + dp[i - 1][1], dp[i - 1][2]);
        } else {
            dp[i][0] = Math.max(curNum + dp[i - 1][1], dp[i - 1][0]);
            dp[i][1] = Math.max(curNum + dp[i - 1][2], dp[i - 1][1]);
            dp[i][2] = Math.max(curNum + dp[i - 1][0], dp[i - 1][2]);
        }
    }
    return dp[n][0];
};
// @lc code=end
maxSumDivThree([3, 6, 5, 1, 8]);


/*
// @lcpr case=start
// [3,6,5,1,8]\n
// @lcpr case=end

// @lcpr case=start
// [4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,4]\n
// @lcpr case=end

 */

