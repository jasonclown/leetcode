/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30104
 *
 * [26] 删除有序数组中的重复项
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const swap = (nums, i, j) => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 使用快慢指针技巧,nums[0,...,slow]为结果集
  let slow = 0,
    fast = 0;

  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      // 找到值不相等的下标，先要把slow+1，指向下一个一样的值，然后将fast指向的值覆盖掉这个slow指向的值；覆盖完成后fast也要往下走一位
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
