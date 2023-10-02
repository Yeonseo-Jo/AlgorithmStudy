//solution

function solution(n) {
  let pattern = "수박";

  return n % 2 === 0
    ? pattern.repeat(n / 2)
    : pattern.repeat(Math.floor(n / 2)) + "수";
}

//다른 풀이 - substr 활용
// function waterMelon(n) {
//   return "수박".repeat(Math.ceil(n)).substr(0, n);
// }
