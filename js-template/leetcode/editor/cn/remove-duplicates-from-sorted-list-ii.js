/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30104
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates1 = function (head) {
  // 链表分解的技巧
  const dup = new ListNode(-199);
  const uniq = new ListNode(-199);
  let dupHead = dup;
  let uniqHead = uniq;
  let cur = head;
  while (cur) {
    const tmp = cur;
    if ((cur.next && cur.next.val === cur.val) || cur.val === dupHead.val) {
      dupHead.next = cur;
      dupHead = dupHead.next;
    } else {
      uniqHead.next = cur;
      uniqHead = uniqHead.next;
    }
    cur = cur.next;
    tmp.next = null;
  }
  return uniq.next;
};

var deleteDuplicates = function (head) { 
  // 双指针技巧
  let newList = new ListNode(-101);
  let newHead = newList;
  let cur = head;
  while (cur) {
    const tmp = cur;
    if (cur.next && cur.val === cur.next.val) {
      while (cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      // 此时指针到了重复元素的最后一个，还需要将其也排除，所以需要继续走一步。
      cur = cur.next;
    } else {
      newHead.next = cur;
      cur = cur.next;
      newHead = newHead.next;
      // 将节点接到链表上后，都要记得把旧节点的尾巴断掉，否则如果当前节点是最后一个满足条件的节点，那默认就会将该节点的后续节点都带上。
      tmp.next = null;
    }
  }
  return newList.next;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */
