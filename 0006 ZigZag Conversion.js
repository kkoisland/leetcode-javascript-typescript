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

var convert = function(s, numRows) {
    const inputArray = s.split('');

    // numRowsに従ってArreyを数字順に作成する
    const array =[];
    for (let i = 0; i < numRows; i++){
        array[i] = [];
    }

    // 上から下へ入れる場合: numRowsの数だけ、すべてのArrayに１文字ずつ入れていく
    for (let x; x<numRows; x++){
        for (let y = 0; y < inputArray.length; y++ ){
            array[x][y] = inputArray[y];
        }
    }
    // 下から上へ入れる場合: numRowsの最初と最後をスキップし、下から上へ入れる

    // Array を数字順に読んだ結果をjoin('')してリターンする
    // array[1]= ['z'];
    let outputArray = '';
    for (let i=0; i < numRows; i++){
        outputArray = outputArray + array[i].join('');
    }
    return outputArray;

    // const Array1 = [];
    // const Array2 = [];
    // for (i=0; i<inputArray.length; i++){
    //     if (i%2 === 0) Array1.push(inputArray[i]);
    //     else Array2.push(inputArray[i]);
    // }

    // return Array1.join('')+Array2.join('');
};

// var convert = function(s, numRows) {
//     const inputArray = s.split('');
//     // for (j=0; j<s; j++){

//     // }

//     const Array1 = [];
//     const Array2 = [];
//     for (i=0; i<inputArray.length; i++){
//         if (i%2 === 0) Array1.push(inputArray[i]);
//         else Array2.push(inputArray[i]);
//     }

//     return Array1.join('')+Array2.join('');
// };
 
console.log(convert('12345', 2)); // 13524
// console.log(convert('abc', 2)); // acb
// console.log(convert('abc', 3)); // abc
// console.log(convert('abcde', 2)); // acebd
// console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING', 4)); // PINALSIGYAHRPI
// console.log(convert('A', 1)); // A