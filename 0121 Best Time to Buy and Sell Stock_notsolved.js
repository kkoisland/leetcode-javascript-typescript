/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
/**
 * @param {number[]} prices
 * @return {number}
 */

//Try #3 Time Limit Exceeded
var maxProfit = function (prices) {
  let maxNum = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let diff = Math.abs(prices[j] - prices[i]);
        if (diff > maxNum) maxNum = diff;
      }
    }
  }
  return maxNum;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([2,4,1])) // 2

//Try #2 Runtime Error
// var maxProfit = function (prices) {
//   const aArray = [];
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         let diff = Math.abs(prices[j] - prices[i]);
//         aArray.push(diff);
//       }
//     }
//   }
//   if (aArray.length === 0) return 0;
//   return Math.max(...aArray);
// };

//Try #1 case [2,4,1] is wrong
// var maxProfit = function (prices) {
//   // find min number
//   const minNum = Math.min(...prices);

//   // find index of min number
//   let theMinIndex = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] === minNum) {
//       theMinIndex = i;
//     }
//   }
//   if (theMinIndex === prices.length-1) return 0;

//   //find the range of search
//   const theMinRange = prices.slice(theMinIndex + 1, prices.length);

//   // find max number after min number
//   const maxNum = Math.max(...theMinRange);

//   return maxNum - minNum;
// };