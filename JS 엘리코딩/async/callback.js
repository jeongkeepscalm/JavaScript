'use strict';

// hosting : var 변수나 함수선언(function declaration)들이 자동적으로 제일 위로 올라감. 


// setTimeout() 지정한 시간이 지나면 콜백함수를 호출
console.log('1');
// setTimeout(function (){
//     console.log('2');
// }, 1000);   // 1초뒤 실행.
setTimeout(()=>console.log(2), 1000);
console.log('3');


function printImmediatelly(print) {
    print();
}
printImmediatelly(()=>console.log('hello'));
















