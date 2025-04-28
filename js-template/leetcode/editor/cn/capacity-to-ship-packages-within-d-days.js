/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 * @lcpr version=30104
 *
 * [1011] 在 D 天内送达包裹的能力
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const calcDays = (allWeights, load) => {
  let days = 1,
    preWeight = 0;
  for (let i = 0; i < allWeights.length; i++) {
    const w = preWeight + allWeights[i];
    if (w > load) {
      days++;
      preWeight = allWeights[i];
    } else {
      preWeight = w;
    }
  }
  return days;
};
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = 0,
    right = 1;
  // 左边界：最小负载要是weights中最大值，否则会出现某个weights无法被运载的情况
  // 有边界：weights的和，一天就全部拉完。
  for (let w of weights) {
    left = Math.max(left, w);
    right += w;
  }
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const useDays = calcDays(weights, mid);
    if (useDays === days) {
      right = mid - 1;
    } else if (useDays > days) {
      left = mid + 1;
    } else if (useDays < days) {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end

// your test code here
shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
/*
// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10]\n5\n
// @lcpr case=end

// @lcpr case=start
// [3,2,2,4,1,4]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,1]\n4\n
// @lcpr case=end

 */
