/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

// Runtime: 91 ms
var hasCycle = function(head: ListNode) { 
    if (head === null) return false;
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    while (fast !== null){
        if (fast.next !== null) fast = fast.next.next;
        else return false;
        if (slow) slow =slow.next;
        if (fast === slow) return true;
    }
    return false;  
  }
  
  // Validate 
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
  
  const list4: ListNode = new ListNode(4);
  const list3: ListNode = new ListNode(3, list4);
  const list2: ListNode = new ListNode(2, list3);
  const list1: ListNode = new ListNode(1, list2);
  list4.next = list2;
  console.log(hasCycle(list1)) // true
//   list4.next = list2;
//   console.log(hasCycle(list1)) // false