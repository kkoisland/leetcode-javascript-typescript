// Runtime 165 ms Beats 38.12% Memory 48.7 MB Beats 29.91%

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result: ListNode = new ListNode(null);
    let sum: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    result.val = sum % 10;
    if (sum >= 10) {
      if      (l1?.next) l1.next.val++;
      else if (l2?.next) l2.next.val++;
      else if (l1) l1.next = new ListNode(1);
      else if (l2) l2.next = new ListNode(1);
    } 
    if (l1?.next || l2?.next) 
        result.next = 
        addTwoNumbers(l1?.next ? l1.next : null,l2?.next? l2.next : null );

    return result;

};