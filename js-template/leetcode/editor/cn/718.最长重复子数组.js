/*
 * @lc app=leetcode.cn id=718 lang=javascript
 * @lcpr version=30200
 *
 * [718] 最长重复子数组
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    const len = Math.max(nums1.length, nums2.length);
    // dp[i][j]=从（0，0）到（i，j）的最长子数组长度
    const dp = Array.from({ length: len }, () => Array(len).fill(0));
    let maxResult = 0;

    for (let i = 0; i < nums1.length; i++) {
        dp[0][i] = nums1[i] === nums2[0] ? 1 : 0;
        maxResult = Math.max(maxResult,dp[0][i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        dp[i][0] = nums2[i] === nums1[0] ? 1 : 0;
        maxResult = Math.max(maxResult, dp[i][0]);
    }
    for (let i = 1; i < nums2.length; i++) {
        for (let j = 1; j < nums1.length; j++) {
            const n1 = nums2[i];
            const n2 = nums1[j];
            if (n1 === n2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxResult = Math.max(maxResult, dp[i][j]);
                // 由于子数组是连续的，因此在n1！==n2的时候，dp[i][j]必须是0；
                // } else {
                //     dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }
    return maxResult;
};
// @lc code=end
findLength([0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0])


/*
// @lcpr case=start
// [1,2,3,2,1]\n[3,2,1,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0,0,0]\n[0,0,0,0,0]\n
// @lcpr case=end

 */

