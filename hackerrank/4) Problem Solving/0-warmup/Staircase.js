// Sample Input
// 6

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.

function staircase(n) {
  for (let i = n - 1; i > -1; i--) {
    let space = " ".repeat(i);
    let stair = "#".repeat(n - i);
    console.log(space + stair);
  }
}
