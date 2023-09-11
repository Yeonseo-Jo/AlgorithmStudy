//solution

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let first = commands[i][0];
    let last = commands[i][1];
    let t = commands[i][2];

    //commands의 요소별로 first부터 last까지 slice하여 자르고 정렬한 후, at으로 t번째 수를 찾아 answer에 push 시킴
    let tempAnswer = array
      .slice(first - 1, last)
      .sort((a, b) => a - b)
      .at(t - 1);

    answer.push(tempAnswer);
  }

  return answer;
}

//다른 풀이 - map 사용
// function solution(array, commands) {
//     // idx는 0부터 시작하므로 i번째부터면 i-1 ~ j-1까지 배열을 slice 후 정렬한 후
//     // 마찬가지로 k번째는 0부터는 k-1에 접근
//     const answer = commands.map(([i,j,k])=>array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
//     return answer
// }
