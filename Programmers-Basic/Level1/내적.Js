function solution(a, b) {
  // let ansewr = 0;

  return a.reduce((acc, val, idx) => acc + val * b[idx], 0);
}

//다른 풀이

// function solution(a, b) {
// current value 인자에 _을 넣어서 빈 인자 값으로, idx 사용해서 곱하기
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
