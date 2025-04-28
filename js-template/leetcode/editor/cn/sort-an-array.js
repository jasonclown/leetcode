/*
 * @lc app=leetcode.cn id=912 lang=javascript
 * @lcpr version=30104
 *
 * [912] 排序数组
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
const mergeSort = (nums) => {
  const merge = (leftNums, lStart, lEnd, rightNums, rStart, rEnd) => {
    let leftIndex = lStart;
    let rightIndex = rStart;
    const res = [];
    while (leftIndex <= lEnd && rightIndex <= rEnd) {
      if (leftNums[leftIndex] > rightNums[rightIndex]) {
        res.push(rightNums[rightIndex]);
        rightIndex++;
      } else {
        res.push(leftNums[leftIndex]);
        leftIndex++;
      }
    }
    while (leftIndex <= lEnd) {
      res.push(leftNums[leftIndex]);
      leftIndex++;
    }
    while (rightIndex <= rEnd) {
      res.push(rightNums[rightIndex]);
      rightIndex++;
    }
    return res;
  };
  const sort = (nums, left, right) => {
    if (left === right) {
      return nums.slice(left, left + 1);
    }
    const mid = left + Math.floor((right - left) / 2);
    const leftSortNums = sort(nums, left, mid);
    const rightSortNums = sort(nums, mid + 1, right);
    const sortNums = merge(
      leftSortNums,
      0,
      leftSortNums.length - 1,
      rightSortNums,
      0,
      rightSortNums.length - 1
    );
    return sortNums;
  };
  return sort(nums, 0, nums.length - 1);
};

const quickSort = (nums) => {
  const partition = (arr, low, high) => {
    const pivot = arr[low];
    let i = low + 1,
      j = high;
    while (i <= j) {
      while (i < high && arr[i] <= pivot) {
        i++;
      }
      while (j > low && arr[j] > pivot) {
        j--;
      }
      if (i >= j) {
        break;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // 因为j是第一个小于等于pivot的值，将其与pivot进行对调，符合左边都小于等于pivot右边都大于pivot。
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  };
  const sort = (nums, left, right) => {
    if (left < right) {
      const mid = partition(nums, left, right);
      sort(nums, left, mid - 1);
      sort(nums, mid + 1, right);
    }
  };
  sort(nums, 0, nums.length - 1);
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 归并排序
  return mergeSort(nums);
  // 快速排序
  quickSort(nums);
  return nums;
};
// @lc code=end

// your test code here
const res = sortArray([5, 32,-123,44123,-33215,2, 3, 1, 4213, 24, 1, 412, 3, 455, 12, 0]);
console.log("res---", res);
/*
// @lcpr case=start
// [5,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,2,0,0]\n
// @lcpr case=end

 */
