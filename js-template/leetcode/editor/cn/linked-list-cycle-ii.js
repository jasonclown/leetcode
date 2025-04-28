/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30104
 *
 * [142] 环形链表 II
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let low = head, fast = head;
  while (low && fast && fast.next) {
    low = low.next;
    fast = fast.next.next;
    if (low === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  low = head;
  while (low && fast) {
    if (low === fast) {
      return low;
    }
    low = low.next;
    fast = fast.next;
  }
  return null;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */

