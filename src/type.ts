// object
const human: {
    name: {
        first: string;
        last: string;
    }
    age: number;
} = {
    name: {
        first: 'yu',
        last: 'yokoyama'
    },
    age: 13
}

// array
const fruit: string[] = ['banana', 'apple', 'orange'];

// tuple
const book: [string, number, boolean] = ['title', 1200, true];

// enum
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI',
}
const size: CoffeeSize = CoffeeSize.GRANDE;

// any
let anything: any;
anything = 'hoge';
anything = true;
anything = {};

// union
let unionType: number | string;
unionType = 10;
unionType = 'hoge';

let unionTypes: (number | string)[];
unionTypes = ['hoge', 10];

// literal
const literal: 'const' = 'const';
// const literal: 'const' = 'hoge';

// type alias
type ClothSize = 'small' | 'medium' | 'large';
const clothSize: ClothSize = 'small';

// function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

function sayHello(): void {
    console.log('Hello');
}

const anotherAdd: (n1: number, n2: number) => number = add;
const allowAdd: (n1: number, n2: number) => number = (n1: number, n2: number): number => n1 + n2;

// null
const nullVar: null = null;

// undefined
const undefinedVar: undefined = undefined;

// callback
function double(number: number, callback: (n1: number) => number): number {
    return callback(number) * 2;
}
double(1, num => num);

// unknown
let unknownInput: unknown = 2;
unknownInput = 'hoge';
unknownInput = null;

let anyInput: any = 3;
anyInput = 'hoge';
anyInput = null;

let textInput: string = 'foga';

// error
// textInput = unknownInput;
textInput = anyInput;

if (typeof unknownInput === 'string') {
    textInput = unknownInput;
}

// never
function neverFunc(str: string): never {
    throw new Error(str);
}
neverFunc('error');
