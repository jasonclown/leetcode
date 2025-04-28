/*
 * @lc app=leetcode.cn id=116 lang=javascript
 * @lcpr version=30104
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  // bfs解法
  // if (!root) {
  //   return root;
  // }
  // let queue = [root];
  // while (queue.length) {
  //   const len = queue.length;
  //   let pre = null;
  //   const newQueue = [];
  //   for (let i = len - 1; i >= 0; i--) {
  //     const node = queue.pop();
  //     if (i === len - 1) {
  //       node.next = null;
  //     } else {
  //       node.next = pre;
  //     }
  //     if (node.right) {
  //       newQueue.unshift(node.right);
  //     }
  //     if (node.left) {
  //       newQueue.unshift(node.left);
  //     }
  //     pre = node;
  //   }
  //   queue = newQueue;
  // }
  // return root;

  //dfs解法
  if (!root) {
    return null;
  }
  const traverse = (node1, node2) => {
    if (!node1 || !node2) {
      return;
    }
    node1.next = node2;
    traverse(node1.left, node1.right);
    traverse(node2.left, node2.right);
    traverse(node1.right, node2.left);
  }
  traverse(root.left, root.right);
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
