// solution

function solution(n, words) {
  let prevWords = [words[0]];

  for (let i = 1; i < words.length; i++) {
    // 중복 단어가 있는 경우
    if (prevWords.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n + 1)];
    }

    // 끝말 잇기를 틀린 경우
    if (words[i].slice(0, 1) !== words[i - 1].slice(-1)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    prevWords.push(words[i]);
  }
  return [0, 0];
}
