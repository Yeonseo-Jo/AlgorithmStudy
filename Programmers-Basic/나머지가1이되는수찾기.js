// solution

function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

// 다른 풀이 - 디폴트 값, while문에서 증감 연산자
// function solution(n, x = 1) {
//   while (x++) {
//     if (n % x === 1) {
//       return x;
//     }
//   }
// }
