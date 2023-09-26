//solution

function solution(a, b) {
  let answer = 0;
  let start = a <= b ? a : b;
  let end = a > b ? a : b;

  for (let i = start; i <= end; i++) {
    answer += i;
  }

  return answer;
}

//다른 풀이 - 양 끝의 합 * 양 끝의 합의 개수로 구하기
// function adder(a, b){
//     return (a+b) * (Math.abs(a-b)+1) / 2;
// }
