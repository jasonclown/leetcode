/*
 * @lc app=leetcode.cn id=983 lang=javascript
 * @lcpr version=30200
 *
 * [983] 最低票价
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");
// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const dp = Array.from({ length: days.length+1 }, () => 0);


    for (let i = 1; i <= days.length; i++) {
        let daySevenIndex = i - 1;
        while (daySevenIndex >= 0 && days[daySevenIndex] + 7 > days[i-1]) {
            daySevenIndex--;
        }
        let daysThirtyIndex = i - 1;
        while (daysThirtyIndex >= 0 && days[daysThirtyIndex] + 30 > days[i-1]) {
            daysThirtyIndex--;
        }
        const choiesOne = dp[i - 1] + costs[0];
        const choiesSeven = dp[daySevenIndex+1] + costs[1];
        const choiesThirty = dp[daysThirtyIndex+1] + costs[2];
        dp[i] = Math.min(choiesOne, choiesSeven, choiesThirty);
    }
    return dp[days.length];
     // 初始化dp数组，长度为旅行日数量+1
    //  const dp = Array.from({ length: days.length + 1 }, () => 0);
    
    //  // 从第1个旅行日遍历到最后一个旅行日
    //  for (let i = 1; i <= days.length; i++) {
    //      // 处理单日票：直接继承前一个状态的花费加上单日票价格
    //      const choice1 = dp[i - 1] + costs[0];
         
    //      // 处理7天票：找到最早的daySevenIndex，使得days[daySevenIndex] >= days[i-1] - 6
    //      let daySevenIndex = i - 1;
    //      while (daySevenIndex >= 0 && days[daySevenIndex] > days[i - 1] - 7) {
    //          daySevenIndex--;
    //      }
    //      // 注意这里使用daySevenIndex+1，因为dp数组的索引比days数组多1
    //      const choice7 = dp[daySevenIndex + 1] + costs[1];
         
    //      // 处理30天票：找到最早的daysThirtyIndex，使得days[daysThirtyIndex] >= days[i-1] - 29
    //      let daysThirtyIndex = i - 1;
    //      while (daysThirtyIndex >= 0 && days[daysThirtyIndex] > days[i - 1] - 30) {
    //          daysThirtyIndex--;
    //      }
    //      // 同样使用daysThirtyIndex+1
    //      const choice30 = dp[daysThirtyIndex + 1] + costs[2];
         
    //      // 取三种选择中的最小值
    //      dp[i] = Math.min(choice1, choice7, choice30);
    //  }
     
    //  return dp[days.length];
};
// @lc code=end
mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])


/*
// @lcpr case=start
// [1,4,6,7,8,20]\n[2,7,15]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10,30,31]\n[2,7,15]\n
// @lcpr case=end

 */

