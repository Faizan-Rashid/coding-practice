import promptSync from "prompt-sync";

const prompt = promptSync();

interface NodeType {
  data: number;
  next: NodeType | null;
}

class ListNode implements NodeType {
  data: number;
  next: NodeType | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
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

// function lastRemaining(n: number): number {
//   if (n === 1) return 1;

//   let array: number[] = [];

//   for (let i = 1; i < n; i += 2) {
//       array.push(i + 1);
//   }

//   const turn: boolean[] = [false, true];

//   while (array.length > 1) {
//       if (turn[0]) {
//           // left turn
//           const newArray: number[] = [];

//           for (let i = 0; i < array.length - 1; i += 2) {
//               newArray.push(array[i + 1]);
//           }
//           array = newArray;

//           turn[0] = false;
//           turn[1] = true;
//       } else if (turn[1]) {
//           // rigth turn
//           const newArray: number[] = [];

//           for (let i = array.length - 1; i > 0; i -= 2) {
//               newArray.unshift(array[i - 1]);
//           }

//           turn[1] = false;
//           turn[0] = true;

//           array = newArray;
//       }
//   }

//   return array[0];
// }
function lastRemaining(n: number): number {
  let head = 1;
  let step = 1;
  let left = true;

  while (n > 1) {
    if (left || n % 2 === 1) {
      head += step;
    }
    step *= 2;
    n = Math.floor(n / 2);
    left = !left;
  }

  return head;
}

console.log(lastRemaining(43));

// console.log(Math.floor(4 / 2));
// console.log(4 % 2);

// function findTheWinner(n: number, k: number): number {
//   const friends: number[] = Array.from({ length: n }, (v, i) => ++i);

//   let i: number = 0;
//   let c: number = 1;

//   while (friends.length !== 1) {
//     if (i > friends.length - 1) {
//       // if i goes out of array last index
//       i = i % friends.length;
//     }

//     if (c === k) {
//       // if we reach at k
//       friends.splice(i, 1);
//       c = 1;
//       continue;
//     }
//     c++;
//     i++;
//   }
//   return friends[0];
// }

// let n = findTheWinner(5, 3);
