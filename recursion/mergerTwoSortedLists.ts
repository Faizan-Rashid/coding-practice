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

const displayListIterative = (list: NodeType | null) => {
  let temp: ListNode | null = list;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
};

const displayListRecursive = (list: NodeType | null) => {
  if (list == null) return;
  console.log(list.data);
  displayListRecursive(list.next);
};

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

const mergeTwoLists: (
  list1: ListNode | null,
  list2: ListNode | null
) => ListNode | null = (list1: ListNode | null, list2: ListNode | null) => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.data <= list2.data) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

let list1: ListNode | null = null;
let list2: ListNode | null = null;

list1 = makeList();
list2 = makeList();


const mergedList: ListNode | null = mergeTwoLists(list1, list2);

console.log(JSON.stringify(mergedList, null, 2));
