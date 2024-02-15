// window : 브라우저 윈도우랑 관련된 모든 유틸리티와 함수에 대한 정보를 가지고 있음
// window 객체는 브라우저 탭에 존재하는 자바스크립트 전역 최상위 객체이다. 따라서 window로 어디서든 접근이 가능하다.

console.dir(document);

// window 객체는 전역으로 선언되어 있기 때문에 window객체 안에 있는 요소는 "window."와 같이 window객체를 참조하지 않고도 property 이름으로 바로 접근이 가능하다
// alert();
// window.alert();


// document
// window 객체 안에는 document 객체가 존재하고, document에는 잠재적으로 보여질 수 있는 dom에 대한 정보가 저장되어 있다. 

// document.body.children[1].children[0].href = 'https://google.com';

// DOM (Document Object Model)
// html 코드를 분석해 데이터와 브라우저의 내부를 표현하는 것


// document.getElementById('some-id'): ID로 HTML 요소 선택(ID는 고유해야 하므로 하나의 요소만 선택)
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

// document.querySelector('<some-css-selector>');
// 제공된 css 선택자에 의해 충족/선택 된 첫번째 일치하는 요소 선택
// css 선택자는 모든 종류의 유효한 css 선택자 일 수 있습니다.
// '#external-id', 'p a'
anchorElement = document.querySelector('a');
anchorElement.href = 'https://naver.com';

// document.querySelectorAll('<some-css-selector>'): 제공된 CSS 선택자에 의해 충족/선택된 일치하는 모든 HTML 요소를 선택합니다.


//ADD AN ELEMENT
// 1. Create the new element

let newAnchor = document.createElement('a');
newAnchor.href = 'https://google.com';
newAnchor.textContent = 'This leads to Google!'

// 2. Get access the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchor);

// REMOVE ELEMENT
// 1. Select the element that should be removed

let firstH1Element = document.querySelector('h1');

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser


// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);


// innerHTML
// 텍스트와 HTML 요소를 같이 사용하고자 할 때
firstParagraph.innerHTML = 'Hi This is <strong>import</strong>';