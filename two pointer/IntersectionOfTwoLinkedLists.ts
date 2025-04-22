function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;

  let headANodeCount = 0;
  let headBNodeCount = 0;

  const mapA = new Map<ListNode | null, number>();
  const mapB = new Map<ListNode | null, number>();

  while (headA || headB) {
    if (headA) mapA.set(headA, headANodeCount);
    if (headB) mapB.set(headB, headBNodeCount);

    if (mapA.has(headB)) return headB;
    if (mapB.has(headA)) return headA;

    if (headA) {
      headA = headA.next;
      ++headANodeCount;
    }

    if (headB) {
      headB = headB.next;
      ++headBNodeCount;
    }
  }

  return null;
}


