/*
 * @lc app=leetcode.cn id=450 lang=javascript
 * @lcpr version=30104
 *
 * [450] 删除二叉搜索树中的节点
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const getMin = (root) => {
  while (root && root.left) {
    root = root.left;
  }
  return root;
};
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 定义：删除val=key的节点，返回新的根节点。
  if (!root) {
    return null;
  }

  if (root.val === key) {
    // 需要考虑三种情况
    // 1.被删除的节点是叶子节点，可以直接删除
    // 2.被删除的节点只有一个节点，需要子节点直接接替当前节点
    // 3.被删除的节点有两个子节点，需要找到右节点的最小节点，然后将其作为新的根节点，再将原来的左右节点赋值给新的根节点
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }
    let minNode = getMin(root.right);
    root.right = deleteNode(root.right, minNode.val);
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [5,3,6,2,4,null,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,7]\n0\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
