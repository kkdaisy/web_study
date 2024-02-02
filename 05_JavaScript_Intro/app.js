let age = 32;
let userName = `Daisy`;  // 백틱으로 띄어쓰기
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
  title: 'Developer', 
  place: 'New York', 
  salary: 50000, 
};

//functions
let totalAdultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: 'Max',// Property
  greet() {
    console.log('Hello!');
  }  // Method
};

person.greet();

