// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4); // 2.5
console.log(10 % 4); //나머지를 반환함
console.log(10 % 3); //1

console.log(10 + 3 - 5 * 10); // 연산은 수학 연산 규칙을 따라 계산됨

let result = (10 + 3 - 5) * 10 ;
result = 10 * 4;
result++;  // result = result + 1;
result--; // result = result -1;

result += 5; // result = result + 5;
result -= 5; // result = result - 5;
result *= 5; // result = result * 5;
result /= 5; // result = result / 5;


// 문자열 연산
console.log('Jake' + ' ' + 'Daisy');
console.log('Jake' - 'ak'); // 뺄셈은 할 수 없음. NaN 숫자 연산을 할 수 없는데 숫자 형태의 연산을 요구할 경우

let userName = 'Max';
console.log(userName.length); // 문자열에 사용할 수 잇는 요소들을 자바스크립트에 내장된 형태로 접근
console.log(userName.toUpperCase());
