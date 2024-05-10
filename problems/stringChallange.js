// kelimenin ilk harfini buyuk yap

const strChallange = (str) => {
    let copyStr = str.split(" ");
    for(let i=0; i<copyStr.length; i++){
        copyStr[i] = copyStr[i].charAt(0).toUpperCase() + copyStr[i].slice(1).toLowerCase()
    }
    return copyStr.join(" ");
}
console.log(strChallange("buse nur"));

// bir harf buyuk bi harf kucuk ilerlesin
// example : Buse nur = BuSe nUr, HELLO = HeLlO

const camelChallange = (str) => {
    let camel=[...str];
    for(let i=0; i<str.length; i++){
        if(i % 2 === 0){
            camel[i] = str[i].toUpperCase();
        }
        else{
            camel[i] = str[i].toLowerCase();
        }
    }
    return camel.join("");
}
console.log(camelChallange("Buse nur"));
console.log(camelChallange("hello???"));
console.log(camelChallange("Hello"));
