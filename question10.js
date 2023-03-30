
// 배열의 평균값

/*
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 1,000
1 ≤ numbers의 길이 ≤ 100
정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

입출력 예 설명

입출력 예 #1

numbers의 원소들의 평균 값은 5.5입니다.

입출력 예 #2

numbers의 원소들의 평균 값은 94.0입니다.

*/

const numbers = [1,2,3,4,5,6,7,8,9,10]

function solution(numbers) {
  const answer = numbers.reduce( (acc, cur, index) => {
    return (acc + cur) / numbers.length
  }, 0);
  console.log(answer / numbers.length);
}

solution(numbers);