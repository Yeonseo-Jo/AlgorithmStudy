//solution

function solution(d, budget) {
  d.sort((a, b) => a - b); //오름차순으로 정렬
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) break; //예산 초과시 break
    count++;
  }
  return count;
}

//다른 풀이 -> reduce 함수 사용

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + Number((budget -= price) >= 0);
    }, 0);
}
