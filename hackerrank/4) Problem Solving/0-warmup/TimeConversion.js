// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  if (s.indexOf("AM") !== -1) {
    s = s.replace("AM", "");
    if (s.slice(0, 2) == "12") {
      s = s.replace("12", "00");
      return s;
    }
    return s;
  } else if (s.indexOf("PM") !== -1) {
    s = s.replace("PM", "");

    if (s.slice(0, 2) == "12") {
      return s;
    }
    let l = s.slice(0, 2);
    l = parseInt(l);
    l = l + 12;
    l = l.toString();
    s = s.replace(s.slice(0, 2), l);
    return s;
  }
}
