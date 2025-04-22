/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  let start: number = 0;
  let end: number = s.length - 1;

  const isValidAlphaNumericChar = (char: string) => {
    const letters = "qwertyuiopasdfghjklzxcvbnm";

    if (char === " ") {
      return false;
    }

    if (!isNaN(Number(char))) return true;

    for (let charac of letters) if (char === charac) return true;

    return false;
  };

  while (start <= end) {
    if (!isValidAlphaNumericChar(s[start].toLowerCase())) {
      console.log(`not valid CASE `, s[start]);
      ++start;
      continue;
    }

    if (!isValidAlphaNumericChar(s[end].toLowerCase())) {
      --end;
      continue;
    }


    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      console.log(`\nstart: ${start} end: ${end}   `, s[start], s[end]);
      return false;
    }
    ++start;
    --end;
  }

  return true;
}




