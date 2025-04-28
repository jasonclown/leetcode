/*
 * @lc app=leetcode.cn id=1201 lang=javascript
 * @lcpr version=30104
 *
 * [1201] 丑数 III
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start

const fn = (num, a, b, c) => {
  const setA = Math.floor(num / a);
  const setB = Math.floor(num / b);
  const setC = Math.floor(num / c);
  const setAB = Math.floor(num / lcm(a, b));
  const setAC = Math.floor(num / lcm(a, c));
  const setBC = Math.floor(num / lcm(b, c));
  const setABC = Math.floor(num / lcm(a, lcm(b, c)));
  return setA + setB + setC - setAB - setBC - setAC + setABC;
};
// 最大公约数
const lcm = (a, b) => {
  return Math.floor((a * b) / gcd(a, b));
};

// 最小公倍数
const gcd = (a, b) => {
  if (a < b) {
    return gcd(b, a);
  }
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
  let left = 1,
    right = 2e9;
  while (left <= right) {
    const mid = left + Math.floor((right - left)/2);
    if (fn(mid, a, b, c) < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end

// your test code here
nthUglyNumber(3, 2, 3, 5);

/*
// @lcpr case=start
// 3\n2\n3\n5\n
// @lcpr case=end

// @lcpr case=start
// 4\n2\n3\n4\n
// @lcpr case=end

// @lcpr case=start
// 5\n2\n11\n13\n
// @lcpr case=end

 */
