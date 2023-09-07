// solution
function solution(arr) {
  var answer = [];
  //for문으로 연속되는 숫자는 제외하고 비연속적인 숫자만 answer 배열에 넣음
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

//다른 풀이 - filter 사용
// function solution(arr){
//     //filter를 사용해 비연속적인 숫자들만 배열로 반환
//     return arr.filter((val,index) => val != arr[index+1]);
// }
