// solution

function solution(people, limit) {
  let boat = 0;

  //오름 차순으로 정렬
  people.sort((a, b) => a - b);

  for (let i = 0, j = people.length - 1; i <= j; j--) {
    //가장 왼쪽 = 가장 적은 몸무게 + 가장 오른쪽 = 가장 무거운 몸무게 더하기
    // 적거나 같으면 그 다음으로 적은 몸무게 더하기 반복!
    if (people[i] + people[j] <= limit) {
      i++;
    }
    //조건문 탈출 = 무게 제한 넘으면 구명 보트 수 증가 시킴
    boat++;
  }

  return boat;
}

//처음에는 pop(), shift()로 풀었으나 shift()를 두 번 쓰니 효율성 통과 x
//참고! -> shift()는 인덱스를 댕겨서 쓰는 방식이라 시간 복잡도 큼!
