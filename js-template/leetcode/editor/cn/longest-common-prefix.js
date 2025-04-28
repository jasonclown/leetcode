/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30104
 *
 * [14] 最长公共前缀
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0],
    index = Number.MAX_VALUE;
  if (strs.length === 1) {
    return prefix;
  }
  for (let i = 1; i < strs.length; i++) {
  
    const str = strs[i];
    let subIndex = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === prefix[j]) {
        subIndex++;
      } else {
        break;
      }
    }
    index = Math.min(index, subIndex);
  }
  return prefix.substring(0, index);
};
// @lc code=end

// your test code here
longestCommonPrefix(["flower","flow","flight"])
/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */
