//solution

function solution(price, money, count) {
  let cost = 0;

  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }

  return money > cost ? 0 : Math.abs(money - cost);
}

//다른 풀이 - 가우스 공식 사용
//가우스 공식 (등차수열의 합 = (첫항 + 마지막항) * (항의 개수) / 2)
// function solution(price, money, count) {
//가우스 공식 활용 부분
//   const tmp = (price * count * (count + 1)) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }
