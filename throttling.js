
function throttling(fn, delay){
    let lastCall = 0;
    return function( ...args ){
        const now = new Date().getTime();
        // 9:10:360 -> converted to ms 123456678- 0 > 1000
        // 9:10:365 -> converted to ms 123457178-123456678  > 1000
        if(now-lastCall>=delay){
            lastCall=now; //123456678
            fn(...args);
        }
    }
}
// cutom leading and trailig . 


// window.addEventListener("mousemove", throttling((e) => {
//     console.log("mousemove event called", e.x, " ", e.y);
// }, 1000))

// inbuilt throttle method is present in lodash library 

// const _ = require('lodash');
// import { throttle } from 'lodash';

window.addEventListener("mousemove", _.throttle((e) => {
    console.log("mousemove event called", e.x, " ", e.y);
}, 1000, {  "leading": true, 'trailing': false}))

//how to cancel throttling
const throttled = _.throttle(doSomething, 2000);
throttled.cance();

//applications for FE
// scroll Events
// resize
// mousemove

//applications for real world apps
//inifinite scrolling 
//tracking user interaction without overloading analytics 
// preventing button spam 


// function throttle(func, wait , options={}){
//     let timeout = null;
//     let previous =0;

//     const {leading = true, trailing = true} = options;

//     const later = () => {
//         previous = leading == false ? 0 : Date.now();
//         timeout = null;

//         if(trailing) {

//         }
//     }

//     const throttled = function (...args) {
//         const now = Date.now();
//         if(!previous && leading == false){
//             previous=now;
//         }

//         const remainig = wait - (now - previous);
//     }
// }