//solution

function solution(n) {
  return n
    .toString()
    .split("")
    .map((i) => +i)
    .reverse();
}

//다른 풀이 - 숫자로 풀이
// function solution(n) {
//   // 숫자풀이
//   var arr = [];

//   do {
//     arr.push(n % 10);
//     n = Math.floor(n / 10);
//   } while (n > 0);

//   return arr;
// }
