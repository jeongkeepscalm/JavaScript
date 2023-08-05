'use strict';

// 1. Object to JSON
console.log('-------1. Object to JSON-------')
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const a = ['abc','def'];
console.log(a);

const rabbit = {
    name:'tori',
    color:'white',
    size:null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit); // rabbit object to JSON
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'RABBIT' : value;
});
console.log(json);




// 2. JSON to Object
console.log('------- 2. JSON to Object-------');
json = JSON.stringify(rabbit);      // rabbit object to JSON
// const obj = JSON.parse(json);       // json to object
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value; 
}); // obj안에 있던 birthdate는 string타입이어서 다시 Date()에 넣어서 출력


console.log(obj);
rabbit.jump();
// obj.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
