// solution - 내 풀이
function solution(s) {
  const nums = s.split(" "); //여기서 원래 Numbers로 숫자형으로 변환해줫으나 -> 문자열도 min, max 인식 가능하므로 필요 없음!

  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
