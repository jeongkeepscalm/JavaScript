'use strict';

// 1. Class declarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak (){
        console.log(`${this.name} hello!`);
    }
}

const oh = new Person('jeong', 30);
console.log(oh.name);
console.log(oh.age);
oh.speak();


// 2. Getter Setter
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('jeonggil','oh',30);
console.log(`age = ${user1.age}`);



// 3. 다형성
class Shape {
    constructor(width, height, color) {
        this.width= width;
        this.height = height;
        this.color = color;
    }

    getArea(){
        return this.width * this.height;
    }

    draw(){
        console.log(`drawing ${this.color} color of `)
    }

}

class Rectangle extends Shape {};
const rectangle = new Rectangle(10, 20, `red`);
rectangle.draw();
console.log(rectangle.getArea());


class Triangle extends Shape {
    getArea(){
        return (this.width * this.height) / 2;
    } 
};
const triangle = new Triangle(10, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());














