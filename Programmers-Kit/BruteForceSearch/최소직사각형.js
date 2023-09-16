//solution

function solution(sizes) {
  const width = [];
  const height = [];

  for (i = 0; i < sizes.length; i++) {
    //가로, 세로 길이 중 긴 값이 가로가 되도록
    let max = Math.max(sizes[i][0], sizes[i][1]);
    //가로, 세로 길이 중 짧은 값이 세로가 되도록
    let min = Math.min(sizes[i][0], sizes[i][1]);

    width.push(max);
    height.push(min);
  }

  //가로, 세로 중에 가장 큰 값만을 골라서 모든 크기의 명함이 들어가는 지갑 만들기
  return Math.max(...width) * Math.max(...height);
}

//다른 풀이 - reduce 함수 사용

// function solution(sizes) {
//     const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//     return hor * ver;
// }

//다른 풀이

// function solution(sizes) {
//     const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

//     let maxSize = [0, 0];
//     rotated.forEach(([w, h]) => {
//         if (w > maxSize[0]) maxSize[0] = w;
//         if (h > maxSize[1]) maxSize[1] = h;
//     })
//     return maxSize[0]*maxSize[1];
// }
