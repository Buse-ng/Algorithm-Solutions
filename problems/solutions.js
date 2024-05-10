 //* 1- Reverse String & Integers

 // String 
// string karakterleri ters cevirip geri döndür
//--- Directions
// Given a string, return a new string with the reversed order of characters
//--- Examples
// reverse('hi') === 'ih'
// reverse('hello') === 'olleh'
// reverse('CodingMoney') === "yenoMgnidoC
// 1.
const reverseString = (str) => {
    let reversed = [];
    for(let i=str.length-1; i>=0; i--){
        reversed.push(str[i]);
    }
    return reversed.join("");
}
console.log(reverseString("helloasas "));

// 2. 
const reverseString2 = (str) => {
    let reversed = "";
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i]; 
    }
    return reversed;
}
console.log(reverseString2("hello heyyy"));

// 3.
const reverseString3 = (str) => {
    const reversed = str.split("").reverse().join("");
    return reversed;
}
console.log(reverseString3("CodingMoney"));

//3 - freeCodeCamo (youtube) 
// const reverse = (str) => {
//   let reversed = "";
//   for (let i of str) {
//     reversed=i+reversed 
//   }
//   return reversed;
// };
// console.log(reverse("str"));


// 1.2 Integer donusum
// Bir tam sayı verildiğinde, bunun tersi olan bir tam sayı döndürün sayıların sıralanması.
// --- Examples
// reverseInt(15)  === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

const reverseInt = (n) => {
    let reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(-51));

// reversed array
const reverseArray = (arr) => {
    let reversed = [];
    for(let i = arr.length - 1; i>=0; i--){
        reversed += arr[i];
        if (i !== 0) {
            reversed += ", ";
        }
    }
    return reversed;
}
console.log(reverseArray([1,4,2,4,5,7,3,9,4,4]));


//* 2 Palindrom 
// kayak : true, madam: true, codingmoney:false
//1.
const palindrom = (str) => {
  let reversed = str.split("").reverse().join("");
  if(str === reversed){
    return true;
  }
  return false;
}
console.log(palindrom("kayak"));

// 2.

function palindrome(str){
  let reversed = "";
  for(let i=str.length-1; i>=0; i--){
    reversed += str[i];
  }
  return reversed === str;
}
console.log(palindrome("madam"));

//* 3 Max Char
// Directions
// en sık kullanılan karakteri döndür.
// Örnekler
// maxChar("abc cccccd")
// "c"
// maxChar("elma 1231111")
// "1"

function maxChar(str) {
  let charmap = {};
  let maxCount = 0;
  let maxChar = "";
  for(let i=0; i<str.length; i++){
    if(charmap[str[i]]){
      charmap[str[i]]++;
    }
    else{
      charmap[str[i]] = 1;
    }
  }
  for (let char in charmap) {
    if (charmap[char] > maxCount) {
      maxChar = char;
      maxCount = charmap[char];
    }
  }

  return { char: maxChar, count: maxCount };
}
console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 12311111"));

function maxChar2(str){
  const charMap = {};
  let max=0;
  let maxChar = "";
  for(let char of str){
    if(charMap[char]){
      charMap[char] = charMap[char] + 1;
    }
    else{
      charMap[char] = 1;
    }
  }
  for(const [key, value] of Object.entries(charMap)){
    if(value>max){
      max = value;
      maxChar = key;
    }
  } 
  
  return maxChar;
}
console.log(maxChar2("apple")); // p
// console.log(maxChar2("apple 12311111")); // 1
// ama applee olunca p veriyor. aslinda p ve e vermeli

function maxChar3(str){
  const charMap = {};
  let max=0;
  let maxChar = "";
  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1;
  }
  for(let i in charMap){
    if(charMap[i]>max){
      max = charMap[i];
      maxChar = i;
    }
  } 
  
  return maxChar;
}
console.log(maxChar3("busenur")); // p

function maxChar4(str){
  const list = {};
  const char = str.split("");
  let max = 0;
  for(let i of char){
      if(list[i]){
          list[i]++;
      }
      else{
          list[i] = 1;
      }
  }
  list.forEach((key, value) => {
      if(value > max){
          max=value;
          list = key;
      }
  });
  return list;
}
console.log(maxChar4("strstrt"))


//* 4 Chunk 
// chunk([1,2,3,4], 2)         -> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2)       -> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) -> [[1,2,3], [4,5,6], [7,8]]
// chunk([1,2,3,4,5], 4)       -> [[1,2,3,4], [5]]
// chunk([1,2,3,4,5], 10)      -> [[1,2,3,4,5]]

function chunk2(array, size) {
  let arr = array.slice();
  let result = [];

  for(let i=0; i<array.length; i++){
    result[i] = arr.splice(0, size);
    if(arr.length === 0) return result;
  }
  return result;
}
console.log(chunk2([1,2,3,4,5], 2));

function chunk3(array, size) {
  let result = [];
  let i = 0;

  while(i<array.length){
    result.push(array.slice(i, i+size));
    i=i+size;
  }
  return result;
}
console.log(chunk3([1,2,3,4,5], 2));

//* 5 - title case
// this is mukhtar from coding money: This Is Mukhtar From Coding Money şeklinde olsun

const capitalize = (str) => {
  let result = str.split(" ");
  for (let i in result) {
    result[i] = `${result[i][0].toUpperCase()}${result[i]
      .slice(1)
      .toLowerCase()}`;
  }
  //veya
  // return result.map((word => word[0].toUpperCase() + word.slice(1)).join(" ");
  return result.join(" ");
};
const str = "this is mukhtar from coding money";
console.log(capitalize(str));

//* 6 
// "coding money" , "money coding" -> true
// 'RAIL! SAFETY', "fairy tales" -> true
// "hi there" , "bye there" -> false
// ayni karakterleri ayni miktarda kullaniyorsa anagram. case sensitive değil. noktalama, boşluk vs dahil değil.

const anagramOperation = (str) => {
  const regex = /[^a-zA-Z]/g; //^ işareti, karakter kümesinin dışındaki karakterleri eşleştirir
  const strCase = str
    .toLowerCase()
    .replace(regex, "")
    .split("")
    .sort()
    .join("");
  return strCase;
};

const anagram = (stringA, stringB) => {
  const strA = anagramOperation(stringA);
  const strB = anagramOperation(stringB);

  if (strA.length !== strB.length || strA !== strB) {
    return false;
  }

  if (strA === strB) {
    return true;
  }
};
console.log(anagram("coding money", "money coding"));

//*6
//2. - freeCodeCamp
const charMap = (str) => {
  const charmap = {};
  const regex = /[\W]/g;
  str = str.toLowerCase().replace(regex, "");

  for (let char of str) {
    charmap[char] = ++charmap[char] || 1;
  }
  return charmap;
};
const anagrams = (stringA, stringB) => {
  const charmapA = charMap(stringA);
  const charmapB = charMap(stringB);
  if (Object.keys(charmapA).length !== Object.keys(charmapB).length)
    return false;
  for (let key in charmapA) {
    if (charmapA[key] !== charmapB[key]) return false;
  }
  return true;
};
console.log(anagrams("coding money", "money coding"));


//* 7
// vowels : a,e,i,o,u
// kac tane vowels var
// why: 0, coding money: 4 , hi there: 3 , how are you: 5

const vowels = (str) => {
  const regex = /[aeiou]/gi;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
};

console.log(vowels("coding money"));

// 2.
const vowels2 = (str) => {
  const vowelCheck = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(vowels2("coding money"));

//* 8
// fizz buzz

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzbuzz(25));

//* 9
// steps
// n=2 steps(2)
// '# '
// '##'
// n=4 steps(4)
// '#   '
// '##  '
// '### '
// '####'

const steps = (n) => {
  const square = "#";
  const space = " ";
  for (let i = 1; i <= n; i++) {
    let squareSteps = square.repeat(i) + space.repeat(n - i);
    console.log(squareSteps);
  }
};
console.log(steps(5));

// 2.
const step = (n) => {
  for (let row = 1; row <= n; row++) {
    let square = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        // i square
        square += "#";
      } else {
        // n-i space
        square += " ";
      }
    }
    console.log(square);
  }
};
console.log(step(5));

// //* 10 pyramid

// steps
// n=1
// ' # '   : 1
// n=2
// ' # '   : 1
// '###'   : 3
// n=3
// '  #  ' : 1
// ' ### ' : 3
// '#####' : 5

// # sayisi :  i=1 i, i=2 i+1, i=3 i+2, i=4 i+3 : -> 2i-1

// " " sayisi: i=1 2, i=2 2, i=3 0 : -> n-i

const pyramids = (n) => {
  const square = "#";
  let pyramid = "";
  const space = " ";
  for (let i = 1; i <= n; i++) {
    pyramid =
      space.repeat(n - i) + square.repeat(i * 2 - 1) + space.repeat(n - i);
    console.log(pyramid);
  }
};
console.log(pyramids(9));

//2.
const pyramid = (n) => {
  const space = " ";
  const square = "#";

  for (let i = 1; i <= n; i++) {
    let p = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j > n - i && j < n + i) {
        p += square;
      } else {
        p += space;
      }
    }
    console.log(p);
  }
};
console.log(pyramid(9));