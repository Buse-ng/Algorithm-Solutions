// Sample Input

// STDIN   Function
// -----   --------
// 2       q = 2
// acxz    s = 'acxz'
// bcxz    s = 'bcxz'

// Sample Output
// Funny
// Not Funny

function funnyString(s) {
  const reversed_s = s.split("").reverse().join("");

  let original_diffs = [];
  let reversed_diffs = [];

  for (let i = 0; i < s.length - 1; i++) {
    original_diffs.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
  }
  for (let i = 0; i < reversed_s.length - 1; i++) {
    reversed_diffs.push(
      Math.abs(reversed_s.charCodeAt(i) - reversed_s.charCodeAt(i + 1))
    );
  }

  if (JSON.stringify(original_diffs) === JSON.stringify(reversed_diffs)) {
    return "Funny";
  } else {
    return "Not Funny";
  }
}
