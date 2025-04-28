/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30104
 *
 * [92] 反转链表 II
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

const reverseN = function (head, n) {
  // 迭代方式翻转前N个链表
  if (!head || !head.next) {
    // 链表没有节点或者只有一个节点时，返回自身
    return head;
  }
  // 翻转前N个链表
  let pre = null,
    cur = head;
  while (n) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    n--;
  }
  // 此时head已经变成了翻转列表里的最后一个节点，
  // 而cur是第n+1个节点，需要将被翻转后的最后一个节点与n+1个节点相连。
  head.next = cur;
  return pre;
};
let newHead;
const recursionReverseN = function (head, n) {
  // 递归方式翻转前N个链表，并返回翻转后的头结点
  if (n == 1) {
    // 此时的head.next是第n+1个节点，需要记录下来，方便后续将翻转后的链表与其进行相连
    newHead = head.next;
    // 当n=1时，代表只有一个链表节点需要翻转，此时直接返回其自身即可
    return head;
  }
  // 此时head还是头结点
  const lastHead = recursionReverseN(head.next, n - 1);
  // 此时head已经变为尾节点

  //此时head.next已经是第n-1个节点，但是head.next还与n-1节点相连，需要修改为指向自身。
  head.next.next = head;
  // 第n+1个节点还需要与尾节点（head）相连。
  head.next = newHead;
  return lastHead;
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var literalReverseBetween = function (head, left, right) {
  // 迭代的方式翻转
  if (left === 1) {
    return reverseN(head, right);
  }
  let pLeft = head;
  for (let i = 1; i < left - 1; i++) {
    pLeft = pLeft.next;
  }
  const lastHeader = reverseN(pLeft.next, right - left + 1);
  pLeft.next = lastHeader;
  return head;
};

var reverseBetween = function (head, left, right) {
  // 递归的方式翻转
  if (left === 1) {
    return recursionReverseN(head, right);
  }

  const lastHeader = reverseBetween(head.next, left-1,right-1);
  head.next = lastHeader;
  return head;
};
// @lc code=end

// your test code here
const list = ListNode.createHead([-3, -2, 3, -5, 3, 4, -4]);
const res = reverseBetween(list, 5, 7);
console.log(res);
/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */
