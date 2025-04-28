/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30104
 *
 * [125] 验证回文串
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      newS += s[i].toLocaleLowerCase();
    }
  }
  let left = 0,
    right = newS.length - 1;
  while (left < right) {
    if (newS[left] !== newS[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */
