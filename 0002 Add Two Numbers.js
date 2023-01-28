/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 

Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Final - Thanks to Akih! Runtime  102 ms  Beats  86.26%  Memory  47.3 MB  Beats  44.61%
var addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let startNode = new ListNode(0);

  let kuriagari = 0;
  resNode = startNode;
  while (node1 !== null || node2 !== null) {
    const calc = (node1 ? node1.val : 0) + (node2 ? node2.val : 0);

    resNode.val = (calc + kuriagari) % 10;
    if (calc + kuriagari > 9) {
      resNode.next = new ListNode(1);
      kuriagari = 1;
    } else if ((!node1?.next || !node1) && (!node2?.next || !node2)) {
      resNode.next = null;
    } else {
      resNode.next = new ListNode(0);
      kuriagari = 0;
    }
    resNode = resNode.next;

    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  return startNode;
};

// 3rd try: almost success, but cannot add null at the end properly
var addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let startNode = new ListNode(0);

  let kuriagari = 0;
  resNode = startNode;

  while (node1 !== null && node2 !== null) {
    if (node2 !== null) {
      calc = node1.val + node2.val;
      node2 = node2.next;
    } else if (node1 === null && node2 !== null) {
      calc = node2.val;
      node2 = node2.next;
    }

    let result = calc;

    if (kuriagari === 1) {
      result = result + kuriagari;
      kuriagari--;
    }
    if (result > 9) {
      result = result - 10;
      kuriagari++;
    }

    resNode.val = result;

    if (node1?.next === null && node2?.next === null) resNode.next = null;
    else {
      resNode.next = new ListNode(0);
      resNode = resNode.next;
    }

    if (kuriagari === 1) {
      resNode.next = new ListNode(1);
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return startNode;
};

// 2nd try
var addTwoNumbers = function (l1, l2) {
  let node2 = l2;
  let startNode = new ListNode(0);

  let kuriagari = 0;
  resNode = startNode;
  for (let node1 = l1; node1 !== null || node2 !== null; node1 = node1.next ) {
    if (node2 !== null) {
      calc = node1.val + node2.val;
      node2 = node2.next;
    } else if (node1 === null && node2 !== null) {
      calc = node2.val;
      node2 = node2.next;
    }
    let result = calc;

    if (kuriagari === 1) {
      result = result + kuriagari;
      kuriagari--;
    }
    if (result > 9) {
      result = result - 10;
      kuriagari++;
    }
    resNode.val = result;
    if (node1?.next === null) resNode.next = null;
    else {
      resNode.next = new ListNode(1);
      resNode = resNode.next;
    }
    if (kuriagari === 1) {
      resNode.next = new ListNode(1);
    }
  }
  return startNode;
};

// 1st try
var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    for (let node=l1; node !== null; node = node.next){
        num1.push(node.val);
    }
    const revnum1 = Number(num1.reverse().join('')); // 342
    let num2 = [];
    for (let node=l2; node !== null; node = node.next){
        num2.push(node.val);
    }
    const revnum2 = Number(num2.reverse().join('')); // 465
    const resnum = (revnum1 + revnum2).toString().split('').reverse(); // ['7', '0', '8']

    const resNode = new ListNode(resnum[0]);
    let prevNode = resNode;
    for (let i = 1; i<resnum.length; i++){
        const resNode = new ListNode(resnum[i]);
        prevNode.next = resNode ? resNode : null;
        prevNode = resNode;
    }
    
    return resNode;  
};

//Validate
const l1Node1 = new ListNode(2);
const l1Node2 = new ListNode(4);
const l1Node3 = new ListNode(3);
l1Node1.next = l1Node2;
l1Node2.next = l1Node3;
l1Node3.next = null;

const l2Node1 = new ListNode(5);
const l2Node2 = new ListNode(6);
const l2Node3 = new ListNode(4);
l2Node1.next = l2Node2;
l2Node2.next = l2Node3;
l2Node3.next = null;


console.log(addTwoNumbers(l1Node1, l2Node1)); // [7,0,8]
// addTwoNumbers(l1Node1, l2Node1);