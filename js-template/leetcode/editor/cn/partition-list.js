/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30104
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const minHeader = new ListNode();
  const maxHeader = new ListNode();
  let mCur = minHeader;
  let maCur = maxHeader;
  let cur = head;
  while (cur) {
    if (cur.val >= x) {
      maCur.next = cur;
      maCur = maCur.next;
    } else {
      mCur.next = cur;
      mCur = mCur.next;
    }
    // cur = cur.next;
    // 关键点：在原来链表基础上生成新链表时，需要把旧节点的next断开，否则会有循环问题
    const temp = cur.next;
    cur.next = null;
    cur = temp;
  }

  mCur.next = maxHeader.next;
  return minHeader.next;
};
// @lc code=end

let l1 = ListNode.createHead([1,4,3,0,2,5,2]);

let res = partition(l1, 3);

ListNode.print(res);

// your test code here



/*
// @lcpr case=start
// [1,4,3,0,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

