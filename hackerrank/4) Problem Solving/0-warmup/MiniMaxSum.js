// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let _sum = 0;
  for (let i in arr) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }

    _sum += arr[i];
  }
  console.log(_sum - max, _sum - min);
}
