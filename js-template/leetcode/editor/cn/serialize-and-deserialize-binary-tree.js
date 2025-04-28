/*
 * @lc app=leetcode.cn id=297 lang=javascript
 * @lcpr version=30104
 *
 * [297] 二叉树的序列化与反序列化
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  const build = (root) => {
    if (!root) {
      // 不要使用null，序列化会转为空
      res.push('NULL');
      return;
    }
    res.push(root.val);
    build(root.left);
    build(root.right);
  }
  build(root);
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const dataArr = data.split(",");
  const build = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    const rootVal = arr.shift();
    if (rootVal === 'NULL') {
      return null;
    }
    const root = new TreeNode(Number(rootVal));
    root.left = build(arr);
    root.right = build(arr);
    return root;
  }
  const root = build(dataArr);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// your test code here
const tree = TreeNode.createRoot([1, 2, 3, null, null, 4, 5]);
const res = serialize(tree);
console.log("res", res);
/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
