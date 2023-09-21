//solution

function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 다른 풀이 - 숫자 풀이 (숫자가 더 빠르다고 한다
function solution(n) {
  //숫자가 분명히 더 빠름
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join("") * 1;
}
