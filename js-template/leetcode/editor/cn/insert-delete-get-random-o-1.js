/*
 * @lc app=leetcode.cn id=380 lang=javascript
 * @lcpr version=30104
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start

var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }
  const delIndex = this.map.get(val);
  const lastVal = this.arr[this.arr.length - 1];
  [this.arr[delIndex], this.arr[this.arr.length - 1]] = [
    this.arr[this.arr.length - 1],
    this.arr[delIndex],
  ];
  this.map.set(lastVal, delIndex);
  this.arr.splice(this.arr.length - 1, 1);
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// your test code here
