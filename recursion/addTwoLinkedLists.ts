import promptSync from "prompt-sync";

const prompt = promptSync();

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself. 
 * 

Example 1:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 1:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

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

// RECURSION
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    if (l2 !== null) {
      let newHead: ListNode = new ListNode(l2.val);
      if (l2.val >= 10) {
        let num = l2?.val;
        let array: string[] = num.toString().split("");

        newHead.val = Number(array.pop());

        num = Number(array.join());
        if (l2.next) {
          l2.next.val += num;
        } else {
          l2.next = new ListNode(num);
        }
      }
      newHead.next = addTwoNumbers(l1, l2.next);
      return newHead;
    } else return null;
  }

  if (l2 === null) {
    // console.log(`l1 is not null: `)
    let newHead: ListNode = new ListNode(l1.val);
    if (l1.val >= 10) {
      let num = l1?.val;
      let array: string[] = num.toString().split("");

      newHead.val = Number(array.pop());

      num = Number(array.join());

      if (l1.next) {
        l1.next.val += num;
      } else l1.next = new ListNode(num);
    }
    newHead.next = addTwoNumbers(l1.next, l2);
    return newHead;
  }

  const sum: number = l1.val + l2.val;
  let newHead: ListNode = new ListNode(sum);

  if (sum >= 10) {
    let array: string[] = sum.toString().split("");
    newHead.val = Number(array.pop());

    const num = Number(array.join());
    // console.log(`\nnum after joining : `, num);

    if (l1.next) {
      l1.next.val += num;
    } else if (l2.next) {
      l2.next.val += num;
    } else l2.next = new ListNode(num);
  }

  newHead.next = addTwoNumbers(l1.next, l2.next);

  return newHead;
}

const l1: ListNode | null = makeList();
const l2: ListNode | null = makeList();

console.log(JSON.stringify(addTwoNumbers(l1, l2), null, 2));
