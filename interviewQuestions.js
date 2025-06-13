//1st question
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Suraj';
//     let age = 21;
// }

//   sayHi();

// answer - undefined, error

//2nd question

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     //copy of i is created . i=0 , i=1 , i=2
//     setTimeout(() => console.log(i), 1);
//   }

// answer -> 333, 012

//3rd question
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };

//   console.log(shape.diameter());
//   console.log(shape.perimeter());

//   answer 20, 20Pi

//4th question
// const bird = {
//     size: 'small',
//   };

//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };

// options:
// A: mouse.bird.size is not valid
// B: mouse[small] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// answer -> A

//5th question

// const person = { name: 'Yogesh' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

//6th question

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });

//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });

//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

//ans - two

//7th ques
//type coercion
//   console.log(1 + '2' + '2');  // 122
// console.log(1 + +'2' + '2'); // 3+'2' -> 32
// console.log(1 - '1' + '2'); // 02
// console.log(1 + -'1' + '2'); // 1 + -1 -> 0 + '2' -> 02
// console.log(+'1' + '1' + '2'); // 112

//8th ques
// var message = "yoyo"
// const obj = {
//   message: 'Hello',
//   greet() {
//     setTimeout(()=> {
//       console.log(this.message);
//     }, 1000);
//   }
// };

// obj.greet(); //this -> obj
//this -> global object
//arrow functions do no thave their own this , their this is equal to -> parent's this

//answer -> ud

// this of greet -> obj

//9th ques
// console.log(typeof null);   // ? obj
// console.log(typeof undefined); // ? ud

// console.log(typeof typeof null);   // ? string
// console.log(typeof typeof undefined); // ? string

//10th ques
// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length); // 11
// console.log(arr);        // sparse arr [1,2,3, empty , 99]

//11 th ques
// const nums = [1, 2, 3, 4];
// const res = nums.map(num => {
//   if (num % 2 === 0) return num * 2;
// });
// console.log(res);

// ans -> [undefined,4,undefined,8]

//12th ques
// const names = ['john', 'JACK', 'Jill'];
// const output = names.map(name => name.toLowerCase()).filter(n => n.startsWith('j'));
// console.log(output);

// //answer -> ["john", "jack", "jill"]

//13th ques

// const items = [1, 2, 3, 4, 5];
// const result = items.reduce((acc, val) => {
//   return acc + val;
// }, 100);

// console.log(result);

// //ans -> 115

//14th ques
//currying
// function multiply(a) {
//   return function(b) {
//     return a * b;
//   }
// }
// console.log(multiply(2)(3));

// ans - > 6

//15th ques

// const sum = a => b => c => a + b + c;
// console.log(sum(1)(2)(3));

// ans -> 6

//16th ques
//implement currying to add 3 numbers

// function add(a){
//   return function(b){
//     return function (c) {
//       return a+b+c;
//     }
//   }
// }
// console.log(add(2)(3)(12)) //=> 17

//extend this for infinite numbers

// function sum(a){
//   if(a==undefined) return undefined
//   let total = a; //2
//   function inner (b){
//     if(b==undefined) return total
//     total=total+b; //5+12 -> 17
//     return inner;
//   }
//   return inner;
// }
// console.log(sum());
// console.log(sum(1)());
// console.log(sum(2)(3)(12)())
// console.log(sum(2)(3)(12)(23)())
// console.log(sum(2)(3)())

//we want no extra brakcets for function call

// function sum(a) {
//   let total = a;
//   function inner(b) {
//     // if(b==undefined) return total
//     total += b;
//     return inner;
//   }

//   inner.toString = () => total;
//   inner.valueOf = () => total;
//   return inner;
// }
// console.log(+sum(1)(2)(3));
// console.log(sum(1)(2)(3)+0);
// console.log(sum(1)(2)(3).toString());


//17th ques

function curry(fn){
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(this, args)
    }else{
      return function(...next){
        return curried.apply(this, args.concat(next));
      }
    }
  }
}

function add(a,b,c){
  return a+b+c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); //6

//figure out using dryn run , debugger mode 


//18th Ques 
// You are given an array of user purchase records in the following format:

const purchases = [
  { userId: 1, name: 'Alice', item: 'Book', price: 250 },
  { userId: 2, name: 'Bob', item: 'Pen', price: 50 },
  { userId: 1, name: 'Alice', item: 'Notebook', price: 100 },
  { userId: 3, name: 'Charlie', item: 'Laptop', price: 50000 },
  { userId: 2, name: 'Bob', item: 'Pencil', price: 20 },
  { userId: 3, name: 'Charlie', item: 'Mouse', price: 800 },
];
// Write a function that returns an array of user summaries in this format:

// [
//   { name: 'Alice', totalSpent: 350, itemsBought: 2 },
//   { name: 'Bob', totalSpent: 70, itemsBought: 2 },
//   { name: 'Charlie', totalSpent: 50800, itemsBought: 2 }
// ]

//1st approach 

const userIds = [...new Set(purchases.map(obj=>obj.userId))]; //unique uarray of all users ids 

const summaries = userIds.map(userId => {
  const userPurchase = purchases.filter(obj => obj.userId==userId);
  const totalSpent = userPurchase.reduce((acc,curr) => {
    return acc + curr.price;
  },0)
  const itemsBought = userPurchase.length;
  const name = userPurchase[0].name;
  return {name, totalSpent, itemsBought}
});

console.log(summaries);

// tc => O(n*u) n = purchases u => uniqye users 

//2nd approach 

const summariesMap = purchases.reduce((acc,curr) => {
  if(!acc[curr.userId]){
    acc[curr.userId]= {name: curr.name, totalSpent: 0, itemsBought:0}
  }
  acc[curr.userId].totalSpent += curr.price;
  acc[curr.userId].itemsBought += 1;
  return acc;
}, {})

console.log(summariesMap);

const finalAns = Object.values(summariesMap);
console.log(finalAns);



// {
//   "1" : {name: "Alice", totalSpent: 350, itemsBought:2}
//   "2" : {name: "Bob", totalSpent: 70, itemsBought:2}
//   "3" : {name: "Charlie", totalSpent: 5800, itemsBought:2}

// }




// O(n) n = number of purchases 