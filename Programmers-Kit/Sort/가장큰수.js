//solution

function solution(numbers) {
  let answer = numbers
    .map((n) => n + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

//다른 풀이 - 템플릿 리터럴 활용 -> 문자열로 안바꿔줘도 됨!
// function solution(numbers) {
//     let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
//     return answer[0] === '0' ? '0' : answer;
// }
