/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30104
 *
 * [3] 无重复字符的最长子串
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    index = 0;
  const window = {};
  let longest = 0;
  while (index < s.length) {
    const add = s[index];
    index++;
    right++;
    window[add] = (window[add] || 0) + 1;

    // 当窗口长度 <= 窗口key的长度
    while (window[add] > 1) {
      const del = s[left];
      left++;
      window[del]--;
    }
    longest = Math.max(right - left, longest);

  }
  return longest;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
