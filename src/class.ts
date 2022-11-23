class Person {

    static species = 'homo sapiens';
    static isAdult(age: number): boolean {
        return age > 20;
    }

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

    get subject(): string {
        return this._subject;
    }

    set subject(value: string){
        if(!value){
            throw new Error('empty value!');
        }
        this._subject = value;
    }

    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    override greeting(this: Teacher) {
        console.log(`hello ${this.name}.`);
        console.log(`my age is ${this.age} years old.`);
        console.log(`I teach ${this._subject}.`);
    }
}

const teacher = new Teacher('yykm teacher', 30, 'math');
console.log(teacher.subject);
teacher.subject = 'science';
console.log(teacher.subject);
teacher.greeting();

// static
// ------------------------------------------------------
console.log(Person.species);
console.log(Person.isAdult(21));

// abstract
// ------------------------------------------------------
abstract class Animal {
    abstract bark(): void;
}

class Dog extends Animal {
    bark(): void {
        console.log('wan wan !');
    }
}

const dog = new Dog();
dog.bark();