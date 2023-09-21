function solution(answers) {
  // 최종 return 할 배열
  let answer = [];

  // 수포자가 직는 방식
  let supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 맞힌 점수 값을 넣을 배열
  let score = [];

  for (let i = 0; i < supo.length; i++) {
    // ex) answers = [1,3,2,4,2,1,3,2,4,2 ...] / supo[i] = [1,2,3,4,5,1,2,3,4,5 ...]
    // 각 인덱스의 값 비교해서 일치하는 값(정답)만을 가진 배열을 반환
    // 정답 수 : filter 된 배열의 길이
    score[i] = answers.filter(
      (el, idx) => el === supo[i][idx % supo[i].length]
    ).length;
  }

  if (score[0] === Math.max(...score)) answer.push(1);
  if (score[1] === Math.max(...score)) answer.push(2);
  if (score[2] === Math.max(...score)) answer.push(3);

  return answer;
}
