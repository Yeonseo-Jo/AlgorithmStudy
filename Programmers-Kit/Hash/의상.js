//solution

function solution(clothes) {
  const map = new Map(); //해시 자료구조 구현을 위한 Map 객체 생성

  let cnt = 1;

  //구조분해할당으로 loop 돌리기
  for (let [cloth, type] of clothes) {
    //type이 있으면 -> value에 +1
    if (map.has(type)) {
      map.set(type, map.get(type) + 1);
      //없는 type이 들어오면 -> 새로운 type, value가 1로 map 객체에 넣기
    } else {
      map.set(type, 1);
    }
  }

  //각 type별 value의 개수 + 1(안입은 경우)를 cnt에 곱해 조합 구하기
  for (let i of map.values()) {
    cnt *= i + 1;
  }

  //모두 안입은 경우를 하나 빼줘서 최종 값 return
  return cnt - 1;
}

//주의! for in vs for of iteration 차이
//for ~ in : 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복
//for ~ of : "반복가능한 객체(Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)"에 대해서 반복하고, 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성
//*object에서는 for..in을, array, map, set에서는 for..of를 사용한다고 함!

//다른 풀이 - object 풀이

// function solution(clothes) {
//     let answer = 1;
//     const obj = {};
//     for(let arr of clothes) {
//         obj[arr[1]] = (obj[arr[1]] || 0) + 1;
//     }

//     for(let key in obj) {
//         answer *= (obj[key]+1);
//     }

//     return answer - 1;
// }
