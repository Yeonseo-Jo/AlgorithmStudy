//solution

function solution(x) {
  const nums = (x + "").split("");

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += Number(nums[i]);
  }

  return x % sum === 0;
}

//다른 풀이 - 숫자로 접근하기

// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x%10; //끝자리 수
//         x = Math.floor(x/10); //그 다음 끝자리 수
//     } while (x>0);

//     return !(num%sum);
// }
