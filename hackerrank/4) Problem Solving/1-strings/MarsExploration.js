// Sample Input 0

// SOSSPSSQSSOR
// Sample Output 0

// 3
// Explanation 0

//  = SOSSPSSQSSOR, and signal length . They sent  SOS messages (i.e.: ).

// Expected signal: SOSSOSSOSSOS
// Recieved signal: SOSSPSSQSSOR
// Difference:          X  X   X
// Sample Input 1

// SOSSOT
// Sample Output 1

// 1
// Explanation 1

//  = SOSSOT, and signal length . They sent  SOS messages (i.e.: ).

// Expected Signal: SOSSOS
// Received Signal: SOSSOT
// Difference:           X
// Sample Input 2

// SOSSOSSOS
// Sample Output 2

// 0
// Explanation 2

// Since no character is altered, return 0.

function marsExploration(s) {
  let output = 0;
  const sos = "SOS";
  const sosCount = s.length / 3;
  const sosText = sos.repeat(sosCount);

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== sosText[i]) {
      // (s[i] !== sos[i % 3])
      output++;
    }
  }
  return output;
}
