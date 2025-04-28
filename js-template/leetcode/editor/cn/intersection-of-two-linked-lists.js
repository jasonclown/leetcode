/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * @lcpr version=30104
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 若两个链表有交点，那从链表头部同时走过len(headA)+len(headB) + 1的距离后一定会相遇，
  // 否则走过len(headA)+len(headB) + 1距离后，二者都为null。
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }

    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }
  return p1;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */

