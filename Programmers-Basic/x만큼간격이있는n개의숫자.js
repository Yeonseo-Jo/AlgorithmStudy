//solution

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

//다른 풀이 - Array.fill() 활용
// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }
