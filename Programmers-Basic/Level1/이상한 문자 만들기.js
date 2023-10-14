//solution
// 공백 기준 단어 분할 -> 짝/홀수 인덱스에 따라 대소문자 변환 해주고 join -> 각 단어 공백 추가 해 join

function solution(s) {
  return s
    .split(" ")
    .map((words) => {
      return words
        .split("")
        .map((el, idx) => {
          return idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
