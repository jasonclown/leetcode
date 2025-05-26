/*
 * @lc app=leetcode.cn id=740 lang=javascript
 * @lcpr version=30200
 *
 * [740] 删除并获得点数
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    // 转化为打家劫舍，取了当前值，就不能取前一个值，
    const numSums = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + cur;
        return acc;
    }, []);
    // const dp = Array.from({ length: numSums.length + 1 }, () => 0);
    let pre = 0, cur = 0;
    for (const s of numSums) {
        const tmp = cur;
        cur = Math.max(cur, (s||0) + pre);
        pre = tmp;
    }
    return cur;
};
// @lc code=end
deleteAndEarn([3, 4, 2]);


/*
// @lcpr case=start
// [3,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,3,3,3,4]\n
// @lcpr case=end

 */

