/*
 * @lc app=leetcode.cn id=875 lang=javascript
 * @lcpr version=30104
 *
 * [875] 爱吃香蕉的珂珂
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start

const calcH = (piles, speed) => {
  let hour = 0;
  for (let i = 0; i < piles.length; i++) {
    hour += Math.ceil(piles[i] / speed);
  }
  return hour;
};
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = 1000000000;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const allSpeed = calcH(piles, mid);
    if (allSpeed === h) {
      right = mid - 1;
    } else if (allSpeed > h) {
      left = mid + 1;
    } else if (allSpeed < h) {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,6,7,11]\n8\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n5\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n6\n
// @lcpr case=end

 */
