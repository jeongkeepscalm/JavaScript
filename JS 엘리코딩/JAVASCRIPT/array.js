'use strict';

const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['apple','banana', 'melon'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[fruits.length -1]);  // 마지막 요소 가져오기

// console.clear();


// 배열 출력(for of / forEach)
for (let fruit of fruits ){
    console.log(fruit);
}
console.log('*************')
// fruits.forEach(function(fruit, index){
//     console.log(fruit, index);
// })
fruits.forEach((a, index) => console.log(a, index));

// console.clear();


// push : add an item to the end. 
// pop : remove an item from the end.
// unshift : add an item to the beginning.
// shift : remove an item from the beginning.
fruits.push('watermelon','peach');
console.log(fruits);
fruits.pop();
fruits.pop();
console.log(fruits);
fruits.unshift('lemon','strowberry')
console.log(fruits);
fruits.shift();
fruits.shift();
console.log(fruits);

// splice : remove an item by index position.
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1, 'fineapple','pair');
console.log(fruits);

// concat : combine two arrays
const coffee = ['Americano','Capuchino'];
const mixed = fruits.concat(coffee);
console.log(mixed);


// indexOf / includes
console.log(fruits.indexOf('fineapple'));
console.log(fruits.includes('apple'));
console.log(fruits.includes('plurm'));


// lastIndexOf
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));




// Quiz
// Q1. make a string out of an array
// join 
{
  console.log('-------Quiz 1--------')
  const a = ['apple', 'banana', 'orange'];
  const AS1 = a.join('|');
  const AS2 = a.toString();
  console.log(AS1);
  console.log("typeof AS1 : "+typeof AS1); 
  console.log(AS2); 
  console.log("typeof AS2 : "+typeof AS2);
}

// Q2. make an array out of a string
{
  console.log('-------Quiz 2--------')
  const Alpabet = 'a,b,c,d,e';
  const result = Alpabet.split(',');
  console.log(result);
}


// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  console.log('-------Quiz 3--------')
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체도 순서가 변하게 됨. 
}


// Q4. make new array without the first two elements
{
  console.log('-------Quiz 4--------')
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  console.log(result); // 3,4,5
  console.log(array); // 1,2,3,4,5
}




class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
// Q5. find a student with the score 90
{
  console.log('-------Quiz 5--------')
  // const result = students.find(function(items, index){
  // return items.score === 90;
  // });
  const result = students.find((student) => student.score === 90);
  students.find((v)=>v.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  console.log('-------Quiz 6--------')
  // const result = students.find((student) => student.enrolled===true);
  // console.log(result); // true값 하나 찾고 출력을 안함. 
  const result = students.filter((student) => student.enrolled===true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  console.log('-------Quiz 7--------')
  const result = students.map((student) => student.score * 2);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log('-------Quiz 8--------')
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2= students.every((student) => student.score < 50);
  console.log(result2);

}

// Q9. compute students' average score
// reduce는 배열하나하나를 돌면서 값을 누적할 때 사용. 
{
  console.log('-------Quiz 9--------')
  const result = students.reduce((prev, curr) => {
    console.log('--------');
    console.log(prev, curr);
    // console.log(curr);
    return prev + curr.score;
    // 리턴 curr 값이 prev에 담기면서 실행됨.
  }, 0);
  // prev 의 initial value를 0으로 지정. 
  console.log(result);

  // const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log('-------Quiz 10--------')
  const res = students.map((student) => student.score)
  .filter((score) => score >= 50);
  
  const result = students.map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(res);
  console.log(result);

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a,b)=>a-b) // a-b가 negative가 나오면 내림차순정렬. 
  .join();
  
  console.log(result);
}