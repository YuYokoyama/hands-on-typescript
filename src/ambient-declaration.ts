// 独自で用意したbase-64 js の型定義ファイルを読み込み
import { toByteArray } from "base64-js";
// import { Hoge } from "base64-js";

const encoded = "44GT44KT44Gr44Gh44Gv"; // "こんにちは" をBase64エンコードしたもの

console.log(toByteArray(encoded));
// console.log(Hoge(encoded));