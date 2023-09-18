//solution

function solution(citations) {
  let answer = 0;
  //인용 횟수 기준으로 내림차순으로 정렬하고
  citations.sort((a, b) => b - a);
  let i = 0;

  while (i < citations.length) {
    if (citations[i] <= i + 1) {
      answer = citations[i];
      return answer;
    }
    i++;
  }
}

//다른 풀이

function solution(citations) {
  let i = 0;

  while (i + 1 <= citations.sort((a, b) => b - a)[i]) i++;

  return i;
}
