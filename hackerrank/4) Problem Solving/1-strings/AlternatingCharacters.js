// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// Sample Output
// 3
// 4
// 0
// 0
// 4

function alternatingCharacters(s) {
  let result = 0;
  let item = s.charAt(0);

  for (let i = 1; i < s.length; i++) {
    if (item === s.charAt(i)) {
      result++;
    } else {
      item = s.charAt(i);
    }
  }
  return result;
}
