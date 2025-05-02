/**Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters. */


function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  function expandAroundCenter(left: number, right: number) {
    while (s[right] === s[left] && left >= 0 && right < s.length) {
      ++right;
      --left;
    }

    return right - left - 1;
  }

  let current = 0;
  let start = 0,
    end = 0;

  while (current < s.length - 1) {
    const oddLength = expandAroundCenter(current, current); // odd palindrome center
    const evenLength = expandAroundCenter(current, current + 1); // even palindrome center
    let longestPalindromeSubstringLength = Math.max(evenLength, oddLength);

    if (longestPalindromeSubstringLength > end - start) {
      start = current - Math.floor((longestPalindromeSubstringLength - 1) / 2);
      end = current + Math.floor(longestPalindromeSubstringLength / 2);
    }

    ++current;
  }
  return s.substring(start, end + 1);
}
