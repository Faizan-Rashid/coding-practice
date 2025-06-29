
/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */

function searchInsert(nums: number[], target: number): number {
  let e = nums.length - 1;
  let s = 0,
    m = 0;

  while (s <= e) {
    m = Math.floor((s + e) / 2);

    const element = nums[m];

    if (element === target) return m;
    else if (element > target) {
      e = m - 1;
    } else if (element < target) {
      s = m + 1;
    }

    if (s > e) return s;

    if (e < s) return e;
  }
  return m;
}
