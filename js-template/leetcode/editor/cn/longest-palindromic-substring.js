/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30104
 *
 * [5] 最长回文子串
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");
// @lc code=start

const palidrome = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  const subString =  s.substring(l + 1, r);

  return subString;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = '';
  for (let i = 0; i < s.length; i++){
    const res1 = palidrome(s, i, i); // 
    const res2 = palidrome(s, i, i + 1);
    res = res1.length > res.length ? res1 : res;
    res = res2.length > res.length ? res2 : res;
  }
  return res;
};
// @lc code=end

// your test code here

longestPalindrome("cbbd")

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

