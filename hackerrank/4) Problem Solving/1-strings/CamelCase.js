// Sample Input
// saveChangesInTheEditor

// Sample Output
// 5

// Explanation
// String  contains five words:
// save
// Changes
// In
// The
// Editor

function camelcase(s) {
    let count=1; // first word
    for(let i in s){
        if(s[i]===s[i].toUpperCase()){
            count++;
        }
    }
    return count;
}
console.log(camelcase("Changes"));