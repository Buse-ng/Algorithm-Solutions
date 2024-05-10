// Sample Input

// Sample Input 0

// We promptly judged antique ivory buckles for the next prize

// Sample Output 0

// pangram

// Sample Explanation 0

// All of the letters of the alphabet are present in the string.

// Sample Input 1

// We promptly judged antique ivory buckles for the prize

// Sample Output 1

// not pangram

// Sample Explanation 0

// The string lacks an x.

function pangrams(s) {
  const seenChars = {};
  const regex = /[a-zA-Z ]/;

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (regex.test(char)) {
      seenChars[char] = true;
    }
  }
  if (Object.keys(seenChars).length === 27) {//26 letters + 1 space
    return "pangram";
  }
  return "not pangram";
}
