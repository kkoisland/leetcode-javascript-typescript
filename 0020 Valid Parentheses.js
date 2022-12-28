/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */

// Runtime 72 ms Beats 83.44%
 var isValid = function (s) {
   const object1 = {
     "(": ")",
     "[": "]",
     "{": "}",
   };
   const array = s.split("");
   result = false;
   let resultStack = [];

   for (let i = 0; i < array.length; i++) {
     for (const key of Object.keys(object1)) {
       // the last value of the array is key, result = false
       if (array[array.length - 1] === key) return (result = false);
       // if array[i] === value, pop and result = tru
       if (array[i] === object1[key]) {
         const arrVal = object1[key]; 
         const popKey = resultStack.pop();
         const popVal = object1[popKey];
         if (arrVal === popVal) {
           result = true;
         } else if (arrVal !== popVal) {
           return (result = false);
         }
       }
       // if array[i] === key, push and result = false
       if (array[i] === key) {
         resultStack.push(key);
         result = false;
       }
     }
   }
   if (resultStack.length > 0 ) result = false;
   return result;
 };

 // validate
 console.log(isValid("()[]")) // true
 console.log(isValid("()[]{}"))  // true
 console.log(isValid("(]")) // false
 console.log(isValid("([)]")) // false
 console.log(isValid("(){}}{")) // false
 console.log(isValid("({{{{}}}))")) // false
 console.log(isValid("{[]}")) // true
 console.log(isValid("([]")) // false


// Practice:
// var isTest = function (s) {
//   let object = {
//     apple: "りんご",
//     grape: "ぶどう",
//     orange: "オレンジ",
//     banana: "バナナ",
//   };
//   for (const key of Object.keys(object)) {
//     console.log(`キーは${key}、値は${object[key]}`);
//     if (key === s) return console.log('yes!')
//   }
// };
// isTest('apple');
