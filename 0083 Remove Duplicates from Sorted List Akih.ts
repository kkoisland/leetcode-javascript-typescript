
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null
  let current: ListNode | null = head;
  let previouce: ListNode | null = null;

  while (current !== null && current.next !== null) {
    console.log(`${current.val}, ${current.next}`)
    if (previouce?.val === current.val) {
      previouce.next = current.next
      current = previouce
    }
    previouce = current
    current = current.next
  }

  return new ListNode(1);
};

const a = new ListNode(1)
const b = new ListNode(1)
const c = new ListNode(2)

a.next = b;
b.next = c;

console.log(deleteDuplicates(a));