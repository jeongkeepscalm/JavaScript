'use strict';

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ojg1 = {name:'jeong gil', age:30};
print(ojg1);

console.log(ojg1.name);     // jeong gil
console.log(ojg1['name']);  // jeong gil


// for in for of
console.clear();
for (let a in ojg1) {
    console.log(a);
}

const array = [1,2,3,4,5];
for(let b of array) {
    console.log(b);
}


// cloning Object.assign()
const user3 = {};
for (let key in ojg1) {
    user3[key] = ojg1[key];
}
console.log(user3);

// const user4 = {};
// Object.assign(user4, ojg1);
const user4 = Object.assign({}, ojg1);
console.log(user4);

const arr = [1,2,3];
const arr2 = Object.assign([], arr);
console.log(arr2);

const fruit1 = {color:`block`};
const fruit2 = {color:`red`, size:'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 중복시, 마지막에 넣은 (fruit2)의 값이 저장. 
console.log(mixed.color);
console.log(mixed.size);