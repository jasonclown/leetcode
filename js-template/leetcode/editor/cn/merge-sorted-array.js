/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30104
 *
 * [88] 合并两个有序数组
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 双指针技巧，由于要原地合并排序，可以从后往前对nums1进行插入
  let p1 = m - 1,
    p2 = n - 1;
  let p = nums1.length - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
  return nums1;
};
// @lc code=end

// your test code here
const list = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */
