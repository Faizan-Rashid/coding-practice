import promptSync from "prompt-sync";

const prompt = promptSync();

/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * 
 * Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const makeList: () => ListNode | null = () => {
  let data: number;
  data = parseInt(prompt("Enter data for which -1 is finish list: "));
  const list: ListNode = new ListNode(data);
  let temp: ListNode | null = list;

  while (true) {
    data = parseInt(prompt("Enter data: "));
    if (data === -1) break;
    const newNode: ListNode = new ListNode(data);
    temp.next = newNode;
    temp = newNode;
  }
  return list;
};

const removeElements: (
  head: ListNode | null,
  val: number
) => ListNode | null = (head: ListNode | null, val: number) => {
  if (head === null) {
    return head;
  }

  if (head.val === val) {
    head = removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
  }
  return head;
};

let list: ListNode | null = makeList();
// list = removeElements(lis``t, 7);

const reverseList: (head: ListNode | null) => ListNode | null = (
  head: ListNode | null
) => {
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

list = reverseList(list);
console.log(JSON.stringify(list, null, 2));
