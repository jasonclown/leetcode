/*
 * @lc app=leetcode.cn id=263 lang=javascript
 * @lcpr version=30104
 *
 * [263] 丑数
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) { return false}
  while (n % 2 === 0) {
    n /= 2;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  while (n % 5 === 0) {
    n /= 5;
  }
  return n === 1;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// 6\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 14\n
// @lcpr case=end

 */

