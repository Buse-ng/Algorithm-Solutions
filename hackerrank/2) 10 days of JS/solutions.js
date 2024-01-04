//? JAVASCRIPT
//* Day 0: Hello, World!
console.log('Hello, World!');

//* Day 0: Data Types
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(Number(secondInteger) + Number(firstInteger));
    console.log(Number(firstDecimal)+ Number(secondDecimal));
    console.log(firstString + secondString);
}

//* Day 1: Arithmetic Operators
function getArea(length, width) {
    let area;
    // Write your code here
    area= length*width;
    return area;
}
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter=2*(length+width);
    return perimeter;
}

//* Day 1: Functions
function factorial (n){
    if(n==0){
        return 1; 
    }
    return n*factorial(n-1);
}

//* Day 1: Let and Const
function main() {
    const PI=Math.PI;
    let r= readLine();
    console.log(PI*r*r);
    console.log(2*PI*r);
}

//* Day 2: Conditional Statements: If-Else
function getGrade(score) {
    let grade;
    if(score>25 && score<=30){grade="A"}
    else if(score>20 && score<=25){grade="B"}
    else if(score>15 && score<=20){grade="C"}
    else if(score>10 && score<=15){grade="D"}
    else if(score>5 && score<=10){grade="E"}
    else if(score>=0 && score<=5){grade="F"}
    return grade;
}

//* Day 2: Conditional Statements: Switch
function getLetter(s) {
    let letter;
    let A=["a","e","i", "o", "u"];
    let B=["b","c","d","g","f"];
    let C=["h","j","k","l","m"];
    for(let i in s){
        switch(s[0]){
            case A[i]:
                return "A";
            break;   
            case B[i]:
                return "B";
            break; 
            case C[i]:
                return "C";
            break;
            default:
                return "D";
        }
    }
    return letter;
}

//* Day 2: Loops
function vowelsAndConsonants(s) { 
    const dizi=["a", "e", "i", "o", "u"]; 
    for(const i of s){
        if(dizi.includes(i)){
            console.log(i);
        }
    }
    for(const i of s){
        if(!(dizi.includes(i))){
            console.log(i);
        }
    }
}

//* Day 3: Arrays
function getSecondLargest(nums) {
    let _max=nums[0];
    let second_max=0;
    for(let item of nums){
        if(_max<item){
            second_max=_max;
            _max=item;
        }
        else if(item>second_max && item!==_max){
            second_max=item;
        }
    }
    return second_max;
}

//* Day 4: Create a Rectangle Object
function Rectangle(a, b) {
    this.length=a;
    this.width=b;
    this.perimeter=2*(this.length+this.width);
    this.area=this.length*this.width;
}