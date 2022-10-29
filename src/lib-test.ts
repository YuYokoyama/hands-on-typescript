// tsconfig.json
// [error]
// -------------
// {
//   "compilerOptions": 
//     "lib": [],
// ..
// }

// tsconfig.json
// --------------
// {
//  "compilerOptions": 
//    "lib": [
//      "ES2016",
//      "DOM",
//      "DOM.Iterable",
//      "ScriptHost"
//    ], 
// ..
// }

const str: string = 'hoge';
console.log(str.toUpperCase());