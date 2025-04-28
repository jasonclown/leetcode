/*
 * @lc app=leetcode.cn id=445 lang=javascript
 * @lcpr version=30104
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 运用虚拟头结点技巧、栈数据结构翻转链表。
  const arr1 = [];
  const arr2 = [];
  const newList = new ListNode(-1);
  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0;
  while (arr1.length || arr2.length || carry) {
    let val = carry;
    if (arr1.length) {
      val += arr1.pop();
    }
    if (arr2.length) {
      val += arr2.pop();
    }
    carry = Math.floor(val / 10);
    val = val % 10;
    const tmp = new ListNode(val);
    tmp.next = newList.next
    newList.next = tmp;
  }
  return newList.next;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [7,2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

 */

