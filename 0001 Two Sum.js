/**
Problem:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
Start from: 
var twoSum = function(nums, target) {
 */

// Solution #1 Two for loops
var twoSum = function(nums, target) { 
    let numsArray = nums;
    for( let i = 0; i < numsArray.length; i++){
      for (let j = i + 1; j < nums.length; j++ ) {
        if (numsArray[i] + nums[j] === target) {
           nums.length = 0;
          return [i, j];
        }
      }
    }  
  };
  console.log(twoSum([3,2,4], 7)); //[0,2]
  
  // Solution #2 better done by Akih
  var twoSum = function(nums, target) { 
    return nums.reduce((acc, cur, i) => {
      for (let j = i + 1; j < nums.length; j++ ) {
        if (cur + nums[j] === target) {
           nums.length = 0;
          return [i, j];
        }
      }
  },[]);
  };
  console.log(twoSum([3,2,4], 7)); //[0,2]