//solution

function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}

//다른 풀이
//sort()후 reverse()해줘도 됨!
// function solution(s) {
//   return [...s].sort().reverse().join("");
// }
