/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30104
 *
 * [1] 两数之和
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const nSum = (n, nums, start, target) => {
  const len = nums.length;
  const res = [];
  if (n < 2 || len < n) {
    return res;
  }
  if (n == 2) {
    let left = start,
      right = len - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      const leftNum = nums[left],
        rightNum = nums[right];
      if (sum < target) {
        while (left < right && nums[left] === leftNum) {
          left++;
        }
      } else if (sum > target) {
        while (left < right && nums[right] === rightNum) {
          right--;
        }
      } else {
        res.push([left, right]);
        while (left < right && nums[left] === leftNum) {
          left++;
        }
        while (left < right && nums[right] === rightNum) {
          right--;
        }
      }
    }
  } else {
    for (let i = start; i < len; i++) {
      const result = nSum(n - 1, nums, i + 1, target);
      for (const item of result) {
        item.push(i);
        res.push(item);
      }
      while (i < len - 1 && nums[i] === nums[i + 1]) {
        i++;
        f;
      }
    }
  }
  return res;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const val2Index = {};
  for (let i = 0; i < nums.length; i++) {
    if (!val2Index[nums[i]]) {
      val2Index[nums[i]] = [i];
    } else {
      val2Index[nums[i]].push(i);
    }
  }
  nums.sort((a, b) => a - b);
  let res = [];
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    const leftNum = nums[left],
      rightNum = nums[right];
    if (sum < target) {
      while (left < right && nums[left] === leftNum) {
        left++;
      }
    } else if (sum > target) {
      while (left < right && nums[right] === rightNum) {
        right--;
      }
    } else {
      if (val2Index[leftNum].length > 1) {
        res.push(...val2Index[leftNum]);
      } else {
        res.push(...val2Index[leftNum], ...val2Index[rightNum]);
      }
      while (left < right && nums[left] === leftNum) {
        left++;
      }
      while (left < right && nums[right] === rightNum) {
        right--;
      }
    }
  }
  return res;
};
// @lc code=end

// your test code here
twoSum([2, 7, 11, 15], 9);
/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
