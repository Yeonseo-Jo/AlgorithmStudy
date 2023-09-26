//solution

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") count++;
    if (s[i] === "y" || s[i] === "Y") count--;
  }

  return count === 0;
}

//다른 풀이 - match.length 활용
// function solution(s) {
//   return (
//     s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
//   );
// }
