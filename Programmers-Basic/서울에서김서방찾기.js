// solution

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

// 다른 풀이 - indexOf 활용
// function findKim(seoul) {
//     return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
// }
