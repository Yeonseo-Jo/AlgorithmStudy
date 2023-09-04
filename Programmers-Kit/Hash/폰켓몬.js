//solution
const solution = (nums) => {
  let answer = [];
  const max = nums.length / 2;

  //최대 선택 개수인 max를 넘어가지 않는 경우에서, includes로 중복을 제거하여 answer 배열에 폰켓몬을 선택해서 넣음
  nums.map((num) =>
    answer.length < max && !answer.includes(num) ? answer.push(num) : num
  );

  return answer.length;
};

// 다른 풀이 (Set을 사용한 중복 제거)
// function solution(nums) {
//     const max = nums.length / 2;
//     const arr = [...new Set(nums)];

//     return arr.length > max ? max : arr.length
//   }
