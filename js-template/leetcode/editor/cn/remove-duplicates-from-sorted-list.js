/*
 * @lc app=leetcode.cn id=83 lang=javascript
 * @lcpr version=30104
 *
 * [83] 删除排序链表中的重复元素
 */


const { ListNode } = require("../common/listNode.js");
const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 快慢指针技巧
  if (!head) {
    return head;
    }
  let low = head, fast = head.next;
  if (!fast) {
    return head;
  }
  while (fast) {
    if (low.val === fast.val) {
      fast = fast.next;
      if (!fast) {
        low.next = null;
      }
    } else {
      low.next = fast;
      low = low.next;
      fast = fast.next;
    
    }
  }
  return head;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */

