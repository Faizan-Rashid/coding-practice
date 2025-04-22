function reverseString(s: string[]): void {
  let start = 0,
    end = s.length - 1;

  while (start <= end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    ++start;
    --end;
  }
}

function _reverseString(s: string[]): void {
  let start = 0,
    end = s.length - 1;

  function solve(start: number, end: number) {
    if (start > end) return;

    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;


    solve(++start, --end);
  }

  solve(start, end);
}

const s = ["h", "e", "l", "l", "o"];

console.log(_reverseString(s));
