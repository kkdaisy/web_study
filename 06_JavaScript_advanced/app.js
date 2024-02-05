// window : 브라우저 윈도우랑 관련된 모든 유틸리티와 함수에 대한 정보를 가지고 있음
// window 객체는 브라우저 탭에 존재하는 자바스크립트 전역 최상위 객체이다. 따라서 window로 어디서든 접근이 가능하다.

console.dir(document);

// window 객체는 전역으로 선언되어 있기 때문에 window객체 안에 있는 요소는 "window."와 같이 window객체를 참조하지 않고도 property 이름으로 바로 접근이 가능하다
// alert();
// window.alert();


// document
// window 객체 안에는 document 객체가 존재하고, document에는 잠재적으로 보여질 수 있는 dom에 대한 정보가 저장되어 있다. 

document.body.children[1].children[0].href = 'https://google.com';

// DOM (Document Object Model)
// html 코드를 분석해 데이터와 브라우저의 내부를 표현하는 것