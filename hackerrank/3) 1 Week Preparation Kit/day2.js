//*  Day 2 - Lonely Integer

function lonelyinteger(a) {
  let arr = [];
  for (let i of a) {
    if (arr[i]) {
      arr[i]++;
    } else {
      arr[i] = 1;
    }
  }
  for (let i in arr) {
    if (arr[i] === 1) {
      return i;
    }
  }
}

// or
function lonelyinteger(a) {
  for (let i in a) {
    let result = a.filter((item) => item === a[i]).length;
    if (result < 2) {
      return a[i];
    }
  }
  return -1;
}

// * Day 2 - Diagonal Difference

function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        sum1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        sum2 += arr[i][j];
      }
    }
  }
  let result = Math.abs(sum1 - sum2);
  return result;
}

//* Day 2- Counting Sort 1

function countingSort(arr) {
  let list = new Array(100).fill(0);
  for (let num of arr) {
    list[num]++;
  }
  return list;
}
