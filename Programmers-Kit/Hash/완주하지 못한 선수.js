//solution
//나의 풀이 - sort를 활용한 풀이
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  //sort()메서드로 참여자와 완주자 명단 정렬(동명이인이 있을 수 있으므로), 반복문으로 두 배열 비교해서 미완주자 찾아내기
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

//다른 풀이 - 해싱
// function solution(participant, completion) {
//     const map = new Map();
//     participant.forEach(name => map.set(name, (map.get(name) || 0) + 1));
//     completion.forEach(name => map.set(name, (map.get(name) || 0) - 1));
//     for (const [name, value] of map) {
//         if (value) {
//             return name;
//         }
//     }
// }

//1. 참가자 배열을 순회하며 이름 별, 이름이 나온 횟수를 map에 저장함
//2. 완주자 배열을 순회하여 이름 별, 이름이 나온 횟수를 map에 저장함
//3. 즉, 순회 후에는 완주하지 못한 선수의 이름의 value는 1이고 나머지 이름은 모두 0이됨 -> map을 순회하며 value가 1인 값의 key(이름) 출력
//Map 객체(new Map()) : dict처럼 키-값 쌍인 집합, 문자열 아닌 값도 키로 사용 가능.
