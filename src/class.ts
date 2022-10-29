class Person {
    // readonly name: string;
    // private age: number;

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

    // initialize property syntax sugar
    constructor(public readonly name: string, protected age: number) { }

    greeting(this: Person) {
        console.log(`hello ${this.name}.`);
        console.log(`my age is ${this.age} years old.`);
    }

    aging() {
        this.age += 1;
    }
}

const person = new Person('yykm', 20);
person.greeting();
person.aging();
person.greeting();

// "this" ref. test
// ------------------------------------------------------
// const anotherPerson = {
//     name: 'another yykm',
//     greeting: person.greeting
// }
// person.greeting(); // hello yykm
// anotherPerson.greeting(); // hello another yykm
// anotherPerson.greeting.call(person); // hello yykm


// extends
// ------------------------------------------------------
class Teacher extends Person {

    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    override greeting(this: Teacher) {
        console.log(`hello ${this.name}.`);
        console.log(`my age is ${this.age} years old.`);
        console.log(`I teach ${this.subject}.`);
    }
}

const teacher = new Teacher('yykm teacher', 30, 'math');
teacher.greeting();