/**Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.
Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 
Constraints:

1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[j] <= 109
Both nums1 and nums2 are sorted in non-decreasing order. */

function getCommon(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0 || nums2.length === 0) return -1;

  if (nums1[nums1.length - 1] < nums2[0]) return -1;

  if (nums2[nums2.length - 1] < nums1[0]) return -1;

  let commonValue: number = -1;

  let smallArray = nums1.length <= nums2.length ? nums1 : nums2;
  let largeArray = nums1.length > nums2.length ? nums1 : nums2;

  for (let i = 0; i < smallArray.length; ++i) {
    let start = 0;
    let end = largeArray.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (smallArray[i] === largeArray[mid]) {
        if (commonValue === -1) commonValue = smallArray[i];
        else commonValue = Math.min(smallArray[i], commonValue);

        break;
      } else if (smallArray[i] > largeArray[mid]) {
        start = mid + 1;
      } else if (smallArray[i] < largeArray[mid]) {
        end = mid - 1;
      }
    }
  }

  return commonValue;
}
