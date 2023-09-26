//solution

function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// 다른 풀이
//1. forEach 사용
// function solution(arr) {
//     let sum = 0;
//     arr.forEach(num => sum += num)

//     return sum / arr.length
// }

//2. reduce() 사용
// reduce 함수 : arr.reduce(callback[, initialValue])
// function solution(array){
//     return array.reduce((a,b) => a+b) / array.length;
//   }
