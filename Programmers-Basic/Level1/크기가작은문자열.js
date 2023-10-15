//solution

function solution(t, p) {
  let answer = 0;

  t.split("").forEach((s, idx) => {
    const subString = t.slice(idx, idx + p.length);
    if (subString.length === p.length) {
      answer += +subString <= +p;
    }
  });
  return answer;
}

//다른 풀이 - for문

//범위를 t.length-p.length까지로 잡아주면 됨!
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
