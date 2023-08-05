'use strict';


function log(msg) {
    document.write(msg);
}
log(`jeong gil `);
log(`b`);


function changeName(obj){
    obj.name = (`Changed Name`);
}
let ojg = {name:`jeonggil`};
changeName(ojg);
console.log(`my name is ${ojg.name}`);


// parameter 
function SendMsg(msg, from = `unknown`) {
    console.log(`${msg} by ${from}`);
}
SendMsg(`go get`);


// Rest parameters (파라미터가 배열로 넘어감)
function printAll(...args) {
    for (let i = 0; i < args.length; i ++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('oh', 'jeong', 'gil');


// Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
    // long upgrade logic... 
    }
}
// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic... 
}


// arrow function
const simple = () => console.log('simpleArrow');
simple();
const plus = (a, b) => console.log(a+ b);
plus(4,5);


// IIFE : Immediately Invoked Function Expression
(function hello (){
    console.log(`IIFE`);
})();