/*
 * @lc app=leetcode.cn id=2789 lang=javascript
 * @lcpr version=30200
 *
 * [2789] 合并后数组中的最大元素
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
    const n = nums.length;
    // 从前往后遍历的方式由于合并后可能会导致原本i-1>i-2变为i-1<i-2（无法满足最优子结构性质）。因此只能从数组的末尾开始遍历。
    // dp=从i到数组末尾的元素中「合并后」最大的元素值。
    const dp = new Array(nums.length).fill(-Infinity);
    dp[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] <= dp[i + 1]) {
            dp[i] = dp[i + 1] + nums[i];
        } else {
            dp[i] = nums[i];
        }
    }
    return dp[0];

};
// @lc code=end
maxArrayValue([5,3,3])


/*
// @lcpr case=start
// [2,3,7,9,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,3,3]\n
// @lcpr case=end

 */

