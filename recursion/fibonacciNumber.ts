
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


/** find nth fibonacci number */

function fib(n: number): number {
  if (n == 1 || n == 2) return 1;
  if (n <= 0) return 0;

  let one = 1;
  let two = 1;
  let fibCount = 2;

  fibCount++;

  while (fibCount <= n) {
    let nextFib: number = one + two;
    one = two;
    two = nextFib;
    fibCount++;
  }

  return two;
}

//  RECURSION
const f: (n: number) => number = (n: number) => f(n - 2) + f(n - 1);
