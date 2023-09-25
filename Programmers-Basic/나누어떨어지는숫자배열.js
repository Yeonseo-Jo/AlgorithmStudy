//solution

function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

//다른 풀이 - filter 함수 사용
// function solution(arr, divisor) {
//   var answer = arr.filter((v) => v % divisor == 0);
//   return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
// }
