/*
 * @lc app=leetcode.cn id=241 lang=javascript
 * @lcpr version=30104
 *
 * [241] 为运算表达式设计优先级
 */

const { ListNode } = require("../common/listNode.js");
const { TreeNode } = require("../common/treeNode.js");

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    const code = 'a'.charCodeAt(0)
    console.log('code', code);
  const n = expression.length;
  // 用于存储每个子表达式的计算结果
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => []));

  // 遍历所有可能的子表达式长度
  for (let len = 1; len <= n; len++) {
      for (let start = 0; start <= n - len; start++) {
          const end = start + len;
          const subExpr = expression.slice(start, end);

          // 检查子表达式是否为数字
          if (!isNaN(Number(subExpr))) {
              dp[start][end].push(parseInt(subExpr));
          } else {
              // 遍历子表达式中的运算符
              for (let k = start; k < end; k++) {
                  const char = expression[k];
                  if (['+', '-', '*'].includes(char)) {
                      const leftResults = dp[start][k];
                      const rightResults = dp[k + 1][end];
                      // 组合左右两部分的结果
                      for (let left of leftResults) {
                          for (let right of rightResults) {
                              switch (char) {
                                  case '+':
                                      dp[start][end].push(left + right);
                                      break;
                                  case '-':
                                      dp[start][end].push(left - right);
                                      break;
                                  case '*':
                                      dp[start][end].push(left * right);
                                      break;
                              }
                          }
                      }
                  }
              }
          }
      }
  }

  return dp[0][n];
};
// @lc code=end

// your test code here
diffWaysToCompute('2-1-1')
/*
// @lcpr case=start
// "2-1-1"\n
// @lcpr case=end

// @lcpr case=start
// "2*3-4*5"\n
// @lcpr case=end

 */
