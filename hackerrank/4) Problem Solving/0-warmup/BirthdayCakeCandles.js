// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.

// Sample Input 0
// 4
// 3 2 1 3

// Sample Output 0
// 2

// Explanation 0
// Candle heights are [3,2,1,3]. The tallest candles are  units, and there are  of them.

function birthdayCakeCandles(candles) {
  let max = candles[0];
  let total = 0;

  for (let i in candles) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }
  for (let i in candles) {
    if (max == candles[i]) {
      total += 1;
    }
  }
  return total;
}
