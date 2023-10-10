//solution

function solution(s) {
  //isNaN 메서드 활용 -> 주어진 문자열이 숫자이면 false, 숫자가 아니면 true 반환
  return (
    (s.length === 4 || s.length === 6) &&
    s.split("").filter((el) => !isNaN(el)).length === s.length
  );
}

//다른 풀이 - 정규식 활용

// function solution(s) {
//   var regex = /^\d{6}$|^\d{4}$/; //숫자가 6개 혹은 4개

//   return regex.test(s); // 정규식과 일치하면 true, 일치하지 않으면 false 반환
// }
