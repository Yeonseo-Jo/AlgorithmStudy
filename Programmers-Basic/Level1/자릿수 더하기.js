//solution
function solution(n) {
  let answer = 0;

  //문자열의 배열로 만들어 각 자리수로 이루어진 배열 만들고, 배열의 각 요소를 answer 변수에 누적하여 return
  n.toString()
    .split("")
    .map((k) => (answer += +k));

  return answer;
}

//다른 풀이 - reduce 함수 사용
// function solution(n)
// {
//   return String(n).split('').reduce((acc,val)=>acc+Number(val),0)
// }
