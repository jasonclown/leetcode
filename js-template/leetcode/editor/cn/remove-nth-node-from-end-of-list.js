/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30104
 *
 * [19] 删除链表的倒数第 N 个结点
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 使用 虚拟头结点可以很容易处理n是头结点的问题。
  const h = new ListNode(-1,head);


  let fast = h;
  let slow = h;
  let i = n;
  while (i > 0) {
    fast = fast.next;
    i--;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return h.next;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
