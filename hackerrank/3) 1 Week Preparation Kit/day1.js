//* Plus Minus

function plusMinus(arr) {
    const n = arr.length;
    let possitive = 0;
    let negative = 0;
    let zero = 0;
    for(let i in arr){
        if(arr[i]>0){
            possitive++;
        }
        else if(arr[i]<0){
            negative++;
        }
        else if(arr[i] === 0){
            zero++;
        }
    }
    console.log((possitive/n).toFixed(6));
    console.log((negative/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}
const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));

//* Mini-Max Sum

function miniMaxSum(arr) {
    let maxNum = arr[0];
    let minNum = arr[0];
    let total=0;
    for(let i in arr){
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }
        if(minNum > arr[i]){
            minNum = arr[i];
        }
        total+=arr[i];
    }
    console.log(total - maxNum, total - minNum);
}
const arr = [1, 2, 3, 4, 5];
console.log(plusMinus(arr));

// or -gpt
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    const minSum = totalSum - arr[arr.length - 1];
    const maxSum = totalSum - arr[0];
    console.log(minSum, maxSum);
}


//* Time Conversion

function timeConversion(s) {
    if(s.indexOf("PM")!==-1){
        s = s.replace("PM", "");
        if(s.slice(0,2) === "12"){
            return s;
        }
        let firstChar = s.slice(0,2);
        firstChar = parseInt(firstChar);
        firstChar = firstChar + 12;
        firstChar = firstChar.toString();
        s = s.replace(s.slice(0,2), firstChar);
        return s;
    }
    else if(s.indexOf("AM")!==-1){
        s = s.replace("AM", "");
        if(s.slice(0,2) === "12"){
            s = s.replace("12", "00")
            return s;
        }
        return s;
    }
}

//* Mock Test - median

function median(arr) {
  let item = arr[0];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (item <= arr[i + 1]) {
        item = arr[i + 1];
      } else {
        item = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = item;
      }
    }
  }
  console.log(arr);
  let medianIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
      return (arr[medianIndex - 1] + arr[medianIndex]) / 2;
  } else {
      return arr[medianIndex];
  }
}
// const arr = [0, 2, 1, 2, 7, 4, 6, 5, 3];
// const arr = [0,1,2,4,6,6,5,2,3];
// const arr = [0, 1, 2, 7, 6, 5, 3];
const arr = [1, 2, 7, 6, 5, 3];
console.log(median(arr));