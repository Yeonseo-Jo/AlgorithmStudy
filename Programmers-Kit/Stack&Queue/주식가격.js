function solution(prices) {
  let answer = [];

  let idx = 0; //가격이 떨어지는지 볼 각 시점의 idx 저장하는 변수

  while (idx < prices.length) {
    let time = 0; //각 시점에서 가격이 떨어지지 않은 시간 저장하는 변수 -> 각 시점마다 달라져야 하므로 while 문에서 초기화

    for (let i = idx + 1; i < prices.length; i++) {
      //가격이 떨어졌으면 해당 time을 저장하고 더 이상 loop를 돌리지 않음
      if (prices[idx] > prices[i]) {
        time++;
        break;
        //가격이 떨어지지 않았으면 time을 증가시키고 다음 요소들까지 loop 돌림
      } else {
        time++;
      }
    }
    //저장된 time을 answer에 Push, 다음 시점으로 가서 떨어진 시점의 time 돌리기
    answer.push(time);
    idx++;
  }

  return answer;
}
