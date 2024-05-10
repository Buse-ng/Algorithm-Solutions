// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

// Sample Output
// 0.500000
// 0.333333
// 0.166667

// Explanation

// There are 3 positive numbers,  negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000,
// negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.

function plusMinus(arr) {
  let negative = 0;
  let possitive = 0;
  let zero = 0;
  const total = arr.length;
  for (let i in arr) {
    if (arr[i] > 0) {
      possitive += 1;
    } else if (arr[i] == 0) {
      zero += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    }
  }

  console.log((possitive / total).toFixed(6));
  console.log((negative / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}
