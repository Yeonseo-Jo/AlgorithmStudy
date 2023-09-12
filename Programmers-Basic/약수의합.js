//solution

function solution(n) {
  let answer = 0;

  //약수 구해서, 약수면 answer 변수에 누적해주고 answer를 return
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}

//다른 풀이
//효율성을 위해 n까지 다 하지 않고, 아래 짝을 찾으면 위아래를 더해 약수의 합 구하기

// function solution(n) {
//     let answer = 0;
//     let i;
//     for (i = 1; i <= Math.sqrt(n); i++){
//         if (!(n%i)) {
//             answer += (i+n/i);
//         }
//     }
//     i--;
//     return (i === n/i) ? answer-i : answer;
// }
