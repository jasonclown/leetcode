/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30104
 *
 * [438] 找到字符串中所有字母异位词
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0,
    right = 0,
    index = 0,
    valid = 0;
  const need = {},
    window = {};
  const resIndex = []; // 用于存储所有符合条件的索引起点
  for (c of p) {
    need[c] = (need[c] || 0) + 1;
  }
  while (index < s.length) {
    const add = s[index];
    right++;
    index++;
    if (need[add]) {
      window[add] = (window[add] || 0) + 1;
      if (need[add] === window[add]) {
        valid++;
      }
    }
    while (right - left >= p.length) {
      if (Object.keys(need).length === valid) {
        resIndex.push(left);
      }
      const del = s[left];
      left++;
      if (need[del]) {
        if (need[del] === window[del]) {
          valid--;
        }
        window[del]--;
      }
    }
  }
  return resIndex;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */
