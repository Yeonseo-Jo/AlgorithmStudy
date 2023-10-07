function solution(n, m) {
  const min = Math.min(n, m);

  let common_max = 1;
  for (let i = min; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      common_max = i;
      break;
    }
  }
  return [common_max, (n * m) / common_max];
}

//다른 풀이 -> 유클리드 호제법
// a % b가 0이 되는 순간 b의 값이 최소공배수가 된다
// function solution(a, b) {
//   var r;
//   for (var ab = a * b; (r = a % b); a = b, b = r) {}
//   return [b, ab / b];
// }
