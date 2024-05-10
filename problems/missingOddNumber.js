// you can use the console window at the bottom

//missing odd the number

// const input = [5,7,9,11,15,17];
// const output = 13

const oddNumber = (num) => {
    for(i=0; i<num.length; i++){
        if(num[i]+2 !== num[i+1]){
            return num[i] + 2;
        }
    }
}
console.log(oddNumber([5,7,9,11,13,15,17]));