/*
 * @lc app=leetcode.cn id=151 lang=javascript
 * @lcpr version=30104
 *
 * [151] 反转字符串中的单词
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.trim().split(' ').filter(str => str );
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  return arr.join(' ');
};
// @lc code=end

// your test code here
reverseWords("a good   example")


/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */

