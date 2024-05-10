// Sample Input
// 6
// 1 2 3 4 10 11

// Sample Output
// 31

function simpleArraySum(ar) {
  var total = 0;
  var n = ar.length;
  for (let i = 0; i < n; i++) {
    total += ar[i];
  }
  return total;
}
