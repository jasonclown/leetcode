/*
 * @lc app=leetcode.cn id=368 lang=javascript
 * @lcpr version=30200
 *
 * [368] 最大整除子集
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    // 先排序，这样确保子问题能被解决。
    nums.sort((a, b) => a - b);
    const len = nums.length;
    // dp[i]=nums中以i结尾的最长符合要求的子序列集合
    const dp = Array.from({ length: len }, () => Array());
    dp[0] = [nums[0]];
    for (let i = 1; i < len; i++) {
        let maxLen = 0, index = -1;
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j].length > maxLen) {
                maxLen = dp[j].length;
                index = j;
            }
        }
        if (index !== -1) {
            dp[i] = [...dp[index]];
        }
        dp[i].push(nums[i]);
    }
    let result = dp[0];
    for (let i = 0; i < dp.length; i++) {
        result = result.length > dp[i].length ? result : dp[i];
    }
    return result;

};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,4,8]\n
// @lcpr case=end

 */

