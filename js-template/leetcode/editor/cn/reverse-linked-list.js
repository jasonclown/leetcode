/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30104
 *
 * [206] 反转链表
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
var reverseList1 = function (head) {
  // 迭代方式翻转链表
  let pre = null;
  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
var reverseList = function (head) {
  // 递归方式翻转链表，该函数的定义：输入一个head，返回一个反转后的头结点。
  if (!head || !head.next) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
// @lc code=end

// your test code here

const list = ListNode.createHead([1, 2, 3, 4, 5]);
const res = reverseList(list);
console.log(res);

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

