/**
 * Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
 */

function reverseOnlyLetters(s: string): string {
  const alphabets = "qwertyuiopasdfghjklzxcvbnm";

  function isAlphabet(letter: string) {
    for (let char of alphabets) {
      if (letter === char) return true;
    }

    return false;
  }

  let start = 0,
    end = s.length - 1;

  let arr: string[] = [];

  arr.length = s.length;

  while (start <= end) {
    if (
      isAlphabet(s[start].toLowerCase()) &&
      isAlphabet(s[end].toLowerCase())
    ) {
      arr[start] = s[end];
      arr[end] = s[start];
      ++start;
      --end;
    } else if (!isAlphabet(s[start].toLowerCase())) {
      arr[start] = s[start];
      ++start;
    } else if (!isAlphabet(s[end].toLowerCase())) {
      console.log(s[start], s[end], start, end);
      arr[end] = s[end];
      --end;
    } else {
      arr[start] = s[start];
      arr[end] = s[end];
      ++start;
      --end;
    }
  }

  return arr.join("");
}
