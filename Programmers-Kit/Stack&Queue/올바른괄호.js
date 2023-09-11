//solution

function solution(s) {
  const answer = [];

  for (const i of s) {
    //여는 괄호인 경우 answer 배열(스택)에 넣음
    if (i === "(") {
      answer.push(i);
    } else {
      //여는 괄호가 아닌 닫힌 괄호이면 answer 배열에서 제거,
      //단 answer 배열이 비어 있는 상태면 올바르지 않은 배열(앞에서 여는 배열이 없음)이므로 false
      if (answer.length === 0) return false;
      // 닫힌 괄호가 올바른 순서로 온 경우 다시 answer 배열(스택)에서 제거
      answer.pop();
    }
  }
  // loop를 모두 돌았을 때 스택에서 모두 올바른 순서로 제거되어 answer 배열(스택)이 비어 있으면 true, 아니면 false
  return answer.length === 0;
}

// 다른 풀이 -> cnt 활용(cnt를 스택처럼 활용한 풀이)
// 여는 괄호면 cnt를 증가, 닫는 괄호면 cnt를 감소시켜서
// 1. cnt가 음수이면 false / 2. loop를 다 돌았을 때 cnt가 0이면 true, 0이 아니면 false return

// function solution(s){
//   let stackCount = 0;
//   for (let i = 0; i < s.length; i++) {
//       stackCount += s[i] === '(' ? 1 : -1;
//       if (stackCount < 0) return false;
//   }
//   return stackCount === 0;
// }
