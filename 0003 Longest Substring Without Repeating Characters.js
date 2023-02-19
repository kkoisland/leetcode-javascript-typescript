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

// Thanks to Akih: Runtime 1123 ms Beats 5.2% Memory 49 MB Beats 24.35%
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let len = 0;
  for (i = 0; i < s.length; i++) {
    arr = [];
    // console.log(`i: ${i}`)
    for (j = i; j < s.length; j++) {
      let found = arr.some((ar) => ar === s[j]);
      if (!found) {
        arr.push(s[j]);
        // console.log(`push s[j]: ${s[j]}`)
        // console.log(`arr: ${arr}`)
      }
      if (arr.length > len) {
        len = arr.length;
        // console.log(len)
      }
      if (found){
        break
      }
    }
  }
  return len;
};

console.log(lengthOfLongestSubstring("aab")); // 2 (ab)
console.log(lengthOfLongestSubstring("pwwkew")); // 3 (wke)
console.log(lengthOfLongestSubstring("abacdea")); // 5
console.log(lengthOfLongestSubstring("pww")); // 2 (pw)
console.log(lengthOfLongestSubstring("bbbb")); // 1 (b)
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 (abc)
console.log(lengthOfLongestSubstring("ab")); // 2 (ab)