// solution

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b); //한 배열은 오름차순 정렬,
  B.sort((a, b) => b - a); //다른 한 배열은 내림차순 정렬

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i]; //가장 작은 값 * 가장 큰 값 곱해서 최소 누적값 만들기
  }

  return answer;
}

//다른 풀이 - reduce 함수 사용 !!!
// function solution(A,B){
//     A.sort((a, b) => a - b)
//     B.sort((a, b) => b - a)
//     return A.reduce((total, val, idx) => total + val * B[idx], 0)
// }
