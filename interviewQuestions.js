//1st question
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Suraj';
    let age = 21;
}
  
  sayHi();
  
// answer - undefined, error

//2nd question

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1); 
  }
  
  for (let i = 0; i < 3; i++) {
    //copy of i is created . i=0 , i=1 , i=2 
    setTimeout(() => console.log(i), 1);
  }

// answer -> 333, 012

//3rd question
const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());

//   answer 20, 20Pi

//4th question
const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };
  
// options: 
// A: mouse.bird.size is not valid
// B: mouse[small] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// answer -> A

//5th question

const person = { name: 'Yogesh' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

//6th question 

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
  });
  
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
  });
  
  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));