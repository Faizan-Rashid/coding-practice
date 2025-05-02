

function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null || head.next.next === null) return;

  const array: ListNode[] = [];

  while (head !== null) {
    array.push(head);
    head = head?.next;
  }

  for (let i: number = 0; i < array.length - 1; i++) {
    array[array.length - 2].next = null;
    const temp: ListNode = array[array.length - 1];
    array.pop();

    temp.next = array[i].next;
    array[i].next = temp;
  }
}
