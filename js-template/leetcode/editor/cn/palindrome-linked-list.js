/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30104
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 使用快慢指针技巧做回文判断
  let slow = head;
  let fast = head;
  let tail;
  if (!head.next) {
    return true;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    // fast不为null，说明链表是一个单数链表，slow正好是中间一个元素，需要往前移动一位，因为单数链表的中间一位不需要去判断。
    slow = slow.next;
  }
  let pre = null;
  // 初始化前一个节点为null
  while (slow) {
    // 指针翻转这块需要记清楚翻转步骤。
    // 1.先获取到下一个节点
    // 2.将当前节点的下一个链接到前节点
    // 3.当前节点变为前节点
    // 4.下一个节点变为当前节点
    const next = slow.next;
    slow.next = pre;
    pre = slow;
    slow = next;
  }
  // 从链表头部和尾部一起往中间一次判断，直到两者相遇
  while (pre) {
    if (head.val !== pre.val) {
      return false;
    }
    head = head.next;
    pre = pre.next;
  }
  return true;

};
// @lc code=end
const list = ListNode.createHead([1,1,2,1]);
isPalindrome(list);
// your test code here

/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
