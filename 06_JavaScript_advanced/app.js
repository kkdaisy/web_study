// 이벤트 리스너
let paragraphElement = document.querySelector('p') ;

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked!!';
}

// 해당 단락 요소의 click을 listen , click이 발생했을 때 실행할 코드
// 만약 함수에 ()를 포함하면 클릭하고 clicked로 바뀌는게 아니라, 바로 clicked로 바뀜
paragraphElement.addEventListener('click', changeParagraphText);


//input type=text 리스너
let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
  // 입력값을 그대로 누적
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  // 입력값을 한개씩
  // let enteredText = event.data;
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);