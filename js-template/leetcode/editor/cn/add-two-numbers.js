/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30104
 *
 * [2] 两数相加
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
  // 使用虚拟头结点的技巧
  const newList = new ListNode(-1);
  let newHead = newList;
  let carry = 0;
  while (l1 || l2 || carry) {
    let val = carry;
    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(val / 10);
    val = val % 10;
    newHead.next = new ListNode(val);
    newHead = newHead.next;
  }
  return newList.next;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

