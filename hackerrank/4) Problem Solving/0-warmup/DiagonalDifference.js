// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output
// 15

// Explanation
// The primary diagonal is:
// 11
//    5
//      -12

// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10

// Sum across the secondary diagonal: 4 + 5 + 10 = 19

// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
  let _left = 0;
  let _right = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > -1; j--) {
      if (i == j) {
        _left += arr[i][j];
      }
      if (i + 1 == arr.length - j && j + 1 == arr.length - i) {
        _right += arr[i][j];
      }
    }
  }
  let total = Math.abs(_left - _right);
  return total;
}
