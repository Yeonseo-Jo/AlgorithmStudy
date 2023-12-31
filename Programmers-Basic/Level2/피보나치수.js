//solution

function solution(n) {
  // 피보나치 수열을 담을 answer 배열
  const answer = [];

  // 0부터 n번째 피보나치 수까지 구한다
  for (i = 0; i <= n; i++) {
    // i가 0과 1이면 그대로 answer 배열에 값이 담김
    if (i === 0 || i === 1) {
      answer[i] = i;
    }

    // 2이상인 경우에는 피보나치 수식에 따라 피보나치 수를 구해 answer 배열에 담는다
    if (i >= 2) {
      // 여기가 피보나치 점화식 (F(n) = F(n-1)+F(n-2))
      // 1234567을 각 수에 미리 나누어 주어 자바스크립트의 정수 범위를 넘지 않도록 한다.
      answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
    }
  }

  // n번째 피보나치 수까지 구했으면 다시 1234567로 나누어 답을 구한다.
  return answer[n] % 1234567;
}
