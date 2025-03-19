/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=30008
 *
 * [21] 合并两个有序链表
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
var mergeTwoLists = function (l1, l2) {
  const header = new ListNode(-1, null);
  let cur = header,
    cur1 = l1,
    cur2 = l2;
  while (cur1 && cur2) {
    if (cur1.val > cur2.val) {
      cur.next = cur2;
      cur2 = cur2.next;
    } else {
      cur.next = cur1;
      cur1 = cur1.next;
    }
    cur = cur.next;
  }
  if (cur1) {
    cur.next = cur1;
  }
  if (cur2) {
    cur.next = cur2;
  }
  return header.next;
};
// @lc code=end

// your test code here

let l1 = ListNode.createHead([1, 2, 4]);
let l2 = ListNode.createHead([1, 3, 4]);

let res = mergeTwoLists(l1, l2);

ListNode.print(res);

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */
