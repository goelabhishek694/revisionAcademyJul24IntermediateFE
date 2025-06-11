function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    };

    return inner;
}

const count = outer();
count(); //1
count(); //2
count(); //3

//applications -> private variable 
function createSecret(secret){
    return function(){
        console.log(`the secret is ${secret}`);
    }
};

const revealSecret = createSecret("JS is easy");
revealSecret();


function Counter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        getCount() {
            return count;
        }
    }
}

const counter = Counter();
counter.increment();
counter.increment();
console.log(counter.getCount());

console.log(counter.count); // undefined (private)