//                                   Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1

// Sample Input 0
// 9
// 10 5 20 20 4 5 2 25 1

// Sample Output 0
// 2 4

// Sample Input 1
// 10
// 3 4 21 36 10 28 35 5 24 42

// Sample Output 1
// 4 0

function breakingRecords(scores) {
  let low = scores[0];
  let high = scores[0];

  let lowCounter = 0;
  let highCounter = 0;

  for (let i = 1; i < scores.length; i++) {
    if (low > scores[i]) {
      low = scores[i];
      lowCounter++;
    } else if (high < scores[i]) {
      high = scores[i];
      highCounter++;
    }
  }
  return [highCounter, lowCounter];
}
