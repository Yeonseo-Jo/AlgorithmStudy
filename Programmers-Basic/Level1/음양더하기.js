//solution

function solution(absolutes, signs) {
  let answer = 0;

  signs.map((sign, idx) =>
    sign ? (answer += absolutes[idx]) : (answer -= absolutes[idx])
  );

  return answer;
}

//다른 풀이 -> reduce 함수로 한 번에
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
