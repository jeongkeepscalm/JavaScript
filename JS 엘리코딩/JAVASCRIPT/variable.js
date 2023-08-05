'use strict';

// *****Symbol*****
// 고유한 식별자가 필요할 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 동일한 심볼을 만들 때,
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); 
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1.description}`)
 

let text = `hello`;
console.log(text.charAt(0)); // h

const jeong = {name:'ojg', age:30};
jeong.name = 'JeongGil';
console.log(`my name is ${jeong.name}`);
