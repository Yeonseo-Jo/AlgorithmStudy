// solution
// 10진수 -> n진수 => toString(n)
// n진수 -> 10진수 => parseInt(수, n)

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// 다른 풀이 (내장함수 사용 x)

// function solution(n) {
//   const answer = [];
//   while (n !== 0) {
//     answer.unshift(n % 3);
//     n = Math.floor(n / 3);
//   }
//   return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
// }
