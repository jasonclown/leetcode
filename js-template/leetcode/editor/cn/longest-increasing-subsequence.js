/*
 * @lc app=leetcode.cn id=300 lang=javascript
 * @lcpr version=30104
 *
 * [300] 最长递增子序列
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const dp = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
      }
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // n^2的解法
  // dp[i]代表nums以i结尾的最长子序列长度
  // const dp = new Array(nums.length).fill(1);
  // let res = 0;

  // for (let i = 0; i < nums.length; i++){
  //   for (let j = 0; j < i; j++){
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // for (let i = 0; i < dp.length; i++){
  //   res = Math.max(res, dp[i]);
  // }
  // return res;
  // nlogn的解法：使用二分查找方式解决
  const top = []; // 存储每一堆中的最小值
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let left = 0,
      right = top.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (top[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (left === top.length) {
      // 左边界如果不存在，则需要将新的num存入数组末尾
      top.push(num);
    } else {
      // 左边界存在，则将其替换为更小的值。
      top[left] = num;
    }
  }
  return top.length;
};
// @lc code=end

// your test code here
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);

/*
// @lcpr case=start
// [10,9,2,5,3,7,101,18]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */
