/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

// Definition for singly-linked list.
　function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//     let current = head;
//     while (current.next !== null) {
//         // list1.val !== list2.val, list1.next =  list2
//         if (current.val !== current?.next?.val){
//             current.next = current?.next.next;
//         }
//         // list1.val === list2.val, list1.next = list1.next.next 
//         else if (current.val === current?.next?.val){
//             current.next = current?.next?.next.next;
//         }
//     }
//     return current;
// };

// var deleteDuplicates = function(head) {
//     let first = head;
//     let second = head.next;
//     while (second !== null) {
//         if (first.val !== second.val){
//           first.next = second;
//           second = second?.next ? second?.next : null;
//         }
//         else if (first.val === second?.val){
//           first.next = second?.next;
//           second = second?.next?.next ? second?.next?.next : null;
//         }
//     }
//     return first;
//   };

// Thanks to Akih, Runtime 71 ms Beats 89.8% Memory 43.8 MB Beats 91.80%
var deleteDuplicates = function(head) {
    let first = head;
    let second = head?.next ? head?.next : null;
    while (second !== null) {
        if (first.val !== second.val){
          first = first.next;
        }
        first.next = second?.next ? second.next : null;  
        second = second?.next ? second.next : null;
    }
    return head;
  };

// Validate
const list1 = new ListNode(1);
const list2 = new ListNode(1);
const list3 = new ListNode(2);

list1.next = list2;
list2.next = list3;
list3.next = null;
console.log(deleteDuplicates(list1)) // [1,2]

// Validate 2
const list4 = new ListNode(3);
const list5 = new ListNode(3);

list1.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;
list5.next = null;
console.log(deleteDuplicates(list1)) // [1,2,3]