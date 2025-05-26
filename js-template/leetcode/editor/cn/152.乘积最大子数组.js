/*
 * @lc app=leetcode.cn id=152 lang=javascript
 * @lcpr version=30200
 *
 * [152] 乘积最大子数组
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // 由于数组中有正数和负数，会导致无法通过子问题推导出父问题，需要借助第二个状态「最大/小值」。
    // dp[i][0] = 以i元素结尾的数组元素最大乘积。
    // dp[i][1] = 以i元素结尾的数组元素最小乘积。
    const dp = Array.from({ length: nums.length }, () => Array());
    dp[0][0] = nums[0];
    dp[0][1] = nums[0];
    let max = dp[0][0];
    for (let i = 1; i < nums.length; i++) {
        const row = [dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i]];
        dp[i][0] = Math.max(...row);
        dp[i][1] = Math.min(...row);
        max = Math.max(max,dp[i][0]);
    }
    return max;

};
// @lc code=end



/*
// @lcpr case=start
// [2,3,-2,4]\n
// @lcpr case=end

// @lcpr case=start
// [-2,0,-1]\n
// @lcpr case=end

 */

