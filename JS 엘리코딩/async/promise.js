'use strict';

// 1. Producer
// 성공적으로 완료되면 resolve 아니면 reject.
const promise = new Promise((resolve, reject)=>{
    console.log('doing sth..');
    setTimeout(() => {
        //resolve('Yammy');
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers
promise
    .then(value => { // promise가 성공/실패하면, value값에 resolve/reject로 지정한 값이 들어감.
    console.log(value); 
    })
    .catch(error => { // error catch
        console.log(error);
    })
    .finally(()=>{ // 무조건 실행.
        console.log('finally');
    });



// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num -1)
            }, 1000);
        });
    })
    .then(num => console.log(num));




