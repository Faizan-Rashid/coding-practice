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

// function isPalindrome(head: ListNode | null, array: number[]): boolean {
//   if (head === null) {
//     const newArray = array.slice();
//     return newArray.every((value, index) => value === array.reverse()[index]);
//   }

//   array.push(head.val);
//   return isPalindrome(head.next, array);
// }

// let list: ListNode | null = makeList();

// LOOP
// function isPalindrome(head: ListNode | null): boolean {
//   const listItemsForward: number[] = [];
//   const listItemsBackward: number[] = [];

//   const traversal = (head: ListNode | null) => {
//     if (head?.next === null || head === null) return head;
//     else {
//       listItemsForward.push(head.val);

//       const newHead = traversal(head?.next);
//       if (newHead !== null) listItemsBackward.push(newHead?.val);
//     }

//     return head;
//   };
//   traversal(head);
//   return listItemsForward.every(
//     (value, index) => value === listItemsBackward[index]
//   );
// }

// STACK
function isPalindrome(head: ListNode | null): boolean {
  let curr: ListNode | null = head;

  const stack: number[] = [];

  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  while (curr && curr.val === stack.pop()) {
    curr = curr.next;
  }

  return curr === null;
}

// console.log(isPalindrome(list));


