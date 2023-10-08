//solution

function solution(s) {
  const array = s.split("");
  const stack = [];

  for (let i = array.length - 1; i >= 0; i--) {
    array[i] === stack.at(-1) ? stack.pop() : stack.push(array[i]);
  }

  return stack.length === 0 ? 1 : 0;
}
