/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30104
 *
 * [25] K 个一组翻转链表
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
const revertN = (head, n) => {
  // 将前N个链表进行翻转，返回翻转后的新头结点，当n=1时，直接返回原来的头结点。
  if (n == 1) {
    return head;
  }
  const newHead = revertN(head.next, n - 1);
  head.next.next = head;
  head.next = null;
  return newHead;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 按照k个一组翻转链表，返回翻转后的新头结点，链表长度不满足k，则不进行翻转。
  let kSuccessor = head;
  for (let i = 0; i < k; i++){
    if (!kSuccessor) {
      return head;
    }
    kSuccessor = kSuccessor.next;
  }
  
  const nextKHead = reverseKGroup(kSuccessor, k);
  const newHead = revertN(head, k);
  head.next = nextKHead;
  return newHead;
};
// @lc code=end

// your test code here



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */

