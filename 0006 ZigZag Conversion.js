/*
6. Zigzag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Thanks to Akih! Runtime 143 ms Beats 22.32% Memory 52.4 MB Beats 11.88%
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    // const inputArray = s.split('');

    const array =[];
    for (let i = 0; i < numRows; i++){
        array[i] = [];
    }

    let x = 0;
    let y = 0;
    let onepack = numRows * 2 - 2;
    let pack = 0;

    for (let j = 0; j < s.length; j++) {
      pack = parseInt(j / onepack);

      if (j % onepack <= numRows - 1) {
        y = j % onepack;
        x = pack * (numRows - 1);
      }
      if (j % onepack > numRows - 1) {
        y = onepack - (j % onepack);
        x = j - (numRows - 1) - ((numRows - 1) * pack);
      }
      array[y][x] = s[j];
    //   console.log(`x: ${x}, y: ${y}, j: ${s[j]}`)
    }

    // array[1]= ['z'];
    // console.log(array.toString());
    let outputArray = '';
    for (let i=0; i < numRows; i++){
        outputArray = outputArray + array[i].join('');
    }
    return outputArray;
};

console.log(convert('123456789', 3)); //159246837
console.log(convert('12345', 3)); // 15243
console.log(convert('abc', 2)); // acb
console.log(convert('abc', 3)); // abc
console.log(convert('abcde', 2)); // acebd
console.log(convert('PAYPALISHIRING', 1)); // 
console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 4)); // PINALSIGYAHRPI
console.log(convert('A', 1)); // A