/*
 * @lc app=leetcode.cn id=567 lang=javascript
 * @lcpr version=30104
 *
 * [567] 字符串的排列
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0,
    right = 0;
  let index = 0,
    valid = 0;
  const need = {};
  const window = {};
  for (s of s1) {
    need[s] = (need[s] || 0) + 1;
  }
  while (index < s2.length) {
    const add = s2[index];
    right++;
    index++;
    if (need[add]) {
      window[add] = (window[add] || 0) + 1;
      if (window[add] === need[add]) {
        valid++;
      }
    }
    while (right - left >= s1.length) {
      if (Object.keys(need).length === valid) {
        return true;
      }
      const del = s2[left];
      left++;
      if (need[del]) {
        if (window[del] === need[del]) {
          valid--;
        }
        window[del]--;
      }
    }
  }
  return false;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "eidbaooo"\n
// @lcpr case=end

// @lcpr case=start
// "eidboaoo"\n
// @lcpr case=end

 */
