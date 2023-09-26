//solution

function solution(numbers) {
  let answer = 0;

  //정렬 후 for loop에서 없는 수 더하기
  numbers.sort((a, b) => a - b);

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

// 다른 풀이 - 전체 합으로 생각해서 풀기 ..
// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
