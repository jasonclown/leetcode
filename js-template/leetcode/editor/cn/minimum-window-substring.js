/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30104
 *
 * [76] 最小覆盖子串
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let window = {};
  const need = {};
  let valid = 0; // 滑动窗口内的有效字符个数和需要匹配的字符的个数相等的个数。
  let index = 0, // 原始串的遍历下标
    start = 0; // 覆盖子串的开始位置
  let left = 0, // 滑动窗口的左下标
    right = 0, // 滑动窗口的右下标
    len = Infinity; // 覆盖子串的长度
  for (char of t) {
    // 将需要匹配的子串的字母和其出现的次数做一个统计
    need[char] = (need[char] || 0) + 1;
  }

  while (index < s.length) {
    const charactor = s[index];
    index++;
    // 扩大滑动窗口
    right = index;
    // 遍历到的字符是需要匹配的字符
    if (need[charactor]) {
      // 统计滑动窗口内需要匹配的字符的个数。
      window[charactor] = (window[charactor] || 0) + 1;
      // 滑动窗口内需要匹配的字符个数与 需要匹配的字符个数相等，则valid+1；
      if (window[charactor] === need[charactor]) {
        valid++;
      }
    }
    // 如果滑动窗口内已经包含了需要匹配的所有字符 且 数量也一致，则开始缩小滑动窗口
    while (valid === Object.keys(need).length) {

      // 新的滑动窗口宽度比之前的小，则取最新的
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      // 开始缩小滑动窗口
      const d = s[left];
      left++;
      // 如果被缩小掉的字符是需要匹配的字符，则滑动窗口内对应的匹配字符数量要减少
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return len === Infinity ? "" : s.substring(start, start + len);
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */
