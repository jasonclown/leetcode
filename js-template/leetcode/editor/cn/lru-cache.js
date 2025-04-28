/*
 * @lc app=leetcode.cn id=146 lang=javascript
 * @lcpr version=30104
 *
 * [146] LRU 缓存
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.cap = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.cache.get(key);
  if (val === undefined) {
    return -1;
  }
  this.makeRecent(key, val);
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
    return;
  }
  if (this.cap === this.cache.size) {
    const oldKey = this.cache.keys().next().value;
    this.cache.delete(oldKey);
  }
  this.cache.set(key, value);
};

LRUCache.prototype.makeRecent = function (key, val) {
  this.cache.delete(key);
  this.cache.set(key, val);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// your test code here
