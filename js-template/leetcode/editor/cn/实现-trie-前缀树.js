/*
 * @lc app=leetcode.cn id=LCR 062 lang=javascript
 * @lcpr version=30104
 *
 * [LCR 062] 实现 Trie (前缀树)
 */

const { ListNode } = require("../common/listNode.js");
// const { TreeNode }  = require("../common/treeNode.js");

// @lc code=start
/**
 * Initialize your data structure here.
 */
const TreeNode = function (val) {
  this.children = {};
  this.isEndOfWord = false;
};
var Trie = function () {
  this.root = new TreeNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let head = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!head.children[char]) {
      head.children[char] = new TreeNode();
    }
    head = head.children[char];
  }
  head.isEndOfWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.getNode(this.root, word);

  return Boolean(node && node.isEndOfWord);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const node = this.getNode(this.root, prefix);

  return Boolean(node);
};

/**
 * 从节点node开始查找key，若存在返回最后一个匹配的node节点
 *  */
Trie.prototype.getNode = function (node, word) {
  let head = node;
  for (let i = 0; i < word.length; i++) {
    if (!head || !head.children) {
      return null;
    }
    const char = word[i];
    head = head.children[char];
  }
  return head;
};
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

// your test code here
const t = new Trie();
t.insert("apple");
t.search("apple");
t.insert("app");
t.search("app");
