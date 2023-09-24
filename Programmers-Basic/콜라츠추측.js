//solution

function solution(num) {
  //collatz 추측 재귀함수
  const collatz = (num, cnt) => {
    if (num === 1) return cnt; // 1이 되면 작업 중단 후, 몇 번 반복했는지 반환
    if (cnt > 500) return -1; // 작업을 500번 이상 반복했으면 -1 반환

    return num % 2 === 0
      ? collatz(num / 2, cnt + 1)
      : collatz(num * 3 + 1, cnt + 1); // 재귀
  };

  // 주어진 수가 1이면 0 반환, 아니면 콜라츠 추측 작업 수행
  return num === 1 ? 0 : collatz(num, 0);
}

//다른 풀이 - while문 활용
function solution(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
