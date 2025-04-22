function _strStr(haystack: string, needle: string): number {
  let i = 0,
    j = 0;

  const arr = [];

  while (i <= haystack.length) {
    if (j >= needle.length) {
      return i - j;
    }

    if (haystack[i] === needle[0]) arr.push(i);

    if (haystack[i] !== needle[j]) {
      i = arr.shift() ?? i;
      j = 0;
    }

    if (haystack[i] === needle[j]) {
      ++j;
    }
    ++i;
  }

  return -1;
}

function strStr(haystack: string, needle: string) {
  return haystack.match(needle)?.index ?? -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("a", "a"));
console.log(strStr("aabaaabaaac", "aabaaac"));
console.log(strStr("hello", "ll"));
