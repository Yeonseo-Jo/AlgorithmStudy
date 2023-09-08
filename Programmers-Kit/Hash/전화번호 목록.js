//solution
function solution(phone_book) {
  //1. 정렬
  phone_book.sort();

  //2. 요소들 순회 -> 앞 요소의 길이만큼 자른 현재 요소의 값이 앞 요소와 같으면 false, 이러한 요소들이 없으면 true 반환
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      return false;
    }
  }

  return true;
}

//다른 풀이
//js의 some 문법 활용 !
// function solution(phoneBook) {
//     return !phoneBook.sort().some((t,i)=> {
//         if(i === phoneBook.length -1) return false;

//         return phoneBook[i+1].startsWith(phoneBook[i]);
//     })
// }
