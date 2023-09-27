//solution

function solution(arr) {
  const minNum = Math.min(...arr);

  arr.splice(arr.indexOf(minNum), 1);

  return arr.length ? arr : [-1];
}

//다른 풀이 -> filter 함수 적용
// function solution(arr) {
//     const min = Math.min(...arr);
//     return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
// }
