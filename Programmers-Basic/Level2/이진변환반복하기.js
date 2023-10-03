//solution

function solution(s) {
  let convertCnt = 0;
  let delZeroCnt = 0;

  while (s !== "1") {
    const orgLength = s.length;
    const convertLength = s.replace(/0/gi, "").length;

    s = convertLength.toString(2); //이진수 만들기!

    convertCnt++;
    delZeroCnt += orgLength - convertLength;
  }

  return [convertCnt, delZeroCnt];
}

//다른 풀이
//match 함수로 0의 개수 세기
// function solution(s) {
//     var answer = [0,0];
//     while(s.length > 1) {
//         answer[0]++;
//         answer[1] += (s.match(/0/g)||[]).length;
//         s = s.replace(/0/g, '').length.toString(2);
//     }
//     return answer;
// }
