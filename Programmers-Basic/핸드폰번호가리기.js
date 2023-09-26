//solution
//기억하기 -> slice 함수는 두번째 인자 안넘겨주면 첫번째 인자부터 끝까지!

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

//다른 풀이 - 정규식 이용
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
