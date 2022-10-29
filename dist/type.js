// object
var human = {
    name: {
        first: 'yu',
        last: 'yokoyama'
    },
    age: 13
};
// array
var fruit = ['banana', 'apple', 'orange'];
// tuple
var book = ['title', 1200, true];
// enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var size = CoffeeSize.GRANDE;
// any
var anything;
anything = 'hoge';
anything = true;
anything = {};
// union
var unionType;
unionType = 10;
unionType = 'hoge';
var unionTypes;
unionTypes = ['hoge', 10];
// literal
var literal = 'const';
var clothSize = 'small';
// function
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
}
var anotherAdd = add;
var allowAdd = function (n1, n2) { return n1 + n2; };
// null
var nullVar = null;
// undefined
var undefinedVar = undefined;
// callback
function double(number, callback) {
    return callback(number) * 2;
}
double(1, function (num) { return num; });
// unknown
var unknownInput = 2;
unknownInput = 'hoge';
unknownInput = null;
var anyInput = 3;
anyInput = 'hoge';
anyInput = null;
var textInput = 'foga';
// error
// textInput = unknownInput;
textInput = anyInput;
if (typeof unknownInput === 'string') {
    textInput = unknownInput;
}
// never
function neverFunc(str) {
    throw new Error(str);
}
neverFunc('error');
