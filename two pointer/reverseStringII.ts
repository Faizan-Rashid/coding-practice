function reverseStr(s: string, k: number): string {
  const array: string[] = s.split("");

  function reverseArrayChars(start: number, end: number) {
    while (start < end) {
      [array[start++], array[end--]] = [array[end], array[start]];
    }
  }

  let start = 0,
    end = start + k - 1;

  while (start < s.length) {
    reverseArrayChars(start, end);
    start = start + k * 2;
    end = Math.min(start + k - 1, array.length - 1);
  }

  return array.join("");
}

console.log(reverseStr("abcdefg", 2));
