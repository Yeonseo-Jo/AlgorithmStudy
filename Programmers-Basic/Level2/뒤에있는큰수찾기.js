//solution
//처음에 이중 for문으로 풀었으나 시간 초과 => 스택 활용으로 해결

function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = []; //검사할 인덱스를 넣을 스택

  for (let i = 0; i < numbers.length; i++) {
    // 스택에 값이 있고, numbers[스택 맨 뒷 값의 idx] < numbers[i]라면 그 stack index는 numbers[i]가 가장 가까운 큰 값
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      // 스택에 있는 인덱스를 pop 해주면서, answer에는 numbers[i] 값 할당
      console.log(stack, stack.at(-1), i, numbers[i]);
      answer[stack.pop()] = numbers[i];
    }
    //i 인덱스를 스택에 푸시
    stack.push(i);
  }

  return answer;
}
