//solution

function solution(n) {
  // 2진수로 변환했을 때의 1의 갯수 => 2진수 변환 후, 정규식을 활용해 0을 없애서 문자열 길이 구함
  const cntOneBinary = (num) => num.toString(2).replace(/0/gi, "").length;

  let answer = n + 1;

  while (answer > n) {
    //1의 개수가 같으면 반환 하도록
    if (cntOneBinary(answer) === cntOneBinary(n)) return answer;
    answer++;
  }
}

//다른 풀이 -> 재귀 활용!

// function solution(n,a=n+1) {
//     return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
// }
