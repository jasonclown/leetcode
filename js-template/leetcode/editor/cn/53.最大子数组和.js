/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30200
 *
 * [53] 最大子数组和
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length;
    if(len===0){
        return 0
    }
    const dp = Array.from({ length: len });
    dp[0] = nums[0];
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
        max = Math.max(max, dp[i]);
    }
    return max;
};
// @lc code=end
const res = maxSubArray([0]);
console.log(res);


/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */

