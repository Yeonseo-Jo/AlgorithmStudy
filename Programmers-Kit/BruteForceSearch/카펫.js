//solution

function solution(brown, yellow) {
  let carpet = brown + yellow;

  // 노란 격자의 최소 길이는 3부터
  for (let h = 3; h < brown; h++) {
    // 카펫의 넓이가 높이로 나누어 떨어질 때만
    if (carpet % h === 0) {
      // 가로 길이
      let w = carpet / h;

      // 테두리를 제외한(-2) 가로, 세로 길이를 곱했을 때 yellow와 같으면 해당 가로, 세로를 반환
      if ((w - 2) * (h - 2) === yellow) return [w, h];
    }
  }
}
