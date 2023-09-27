function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

//다른 풀이 - charAt()으로 풀이
// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }
// -> [0]으로 인덱싱 시 " " 공백 문자에서 undefined 오류가 나는 것을 charAt()으로 해결 가능한 풀이!
