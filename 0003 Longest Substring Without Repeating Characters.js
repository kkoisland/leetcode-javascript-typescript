/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = [];
  let len = 0;
  for (i = 0; i < s.length; i++) {
    console.log(s[i]);
    for (j = 0; j < arr.length; j++) {
      console.log(`arr[j]: ${arr[j]}`);
      console.log(`s[i]: ${s[i]}`);
      console.log("================");
      // if (arr.length > 1) {
      //   if (arr.pop() === s[i]) break;
      // }
      if (arr[j] === s[i] && len < j + 1) {
        len = j + 1;
        console.log(`len: ${len}`)
        break;
      }
    }
    arr.push(s[i]);
  }
  return len;
};

// console.log(lengthOfLongestSubstring("pww")); // 3 (wke)
console.log(lengthOfLongestSubstring("pwwkew")); // 3 (wke)
// console.log(lengthOfLongestSubstring("bbbb")); // 1 (b)