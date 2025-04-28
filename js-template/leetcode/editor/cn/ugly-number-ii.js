/*
 * @lc app=leetcode.cn id=264 lang=javascript
 * @lcpr version=30104
 *
 * [264] 丑数 II
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let p1 = 1, p2 = 1, p3 = 1;
  let v1 = 1, v2 = 1, v3 = 1;
  let p = 1;
  const ugly = new Array(n + 1);
  while (p <= n) {
    const min = Math.min(Math.min(v1, v2), v3);
    ugly[p] = min;
    p++;
    if (v1 === min) {
      v1 = 2 * ugly[p1];
      p1++;
    }
    if (v2 === min) {
      v2 = 3 * ugly[p2];
      p2++;
    }

    if (v3 === min) {
      v3 = 5 * ugly[p3];
      p3++;
    }
  }
  return ugly[n];
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

