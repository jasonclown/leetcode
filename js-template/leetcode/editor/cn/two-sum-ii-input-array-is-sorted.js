/*
 * @lc app=leetcode.cn id=167 lang=javascript
 * @lcpr version=30104
 *
 * [167] 两数之和 II - 输入有序数组
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0, right = numbers.length-1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      break;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left+1,right+1]
};
// @lc code=end

// your test code here
twoSum([2,7,11,15],9)


/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n-1\n
// @lcpr case=end

 */

