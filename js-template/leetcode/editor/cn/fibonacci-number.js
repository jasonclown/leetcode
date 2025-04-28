/*
 * @lc app=leetcode.cn id=509 lang=javascript
 * @lcpr version=30104
 *
 * [509] 斐波那契数
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const map = {};
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (map[n]) {
    return map[n];
  }
  if (n <= 1) {
    return n;
  }
  map[n - 1] = fib(n - 1);
  map[n - 2] = fib(n - 2);
  return map[n - 1] + map[n - 2];
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */
