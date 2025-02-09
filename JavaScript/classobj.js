class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
}
let person1 = new Person("Alice", 30);
person1.display();