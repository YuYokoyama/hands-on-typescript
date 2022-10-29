# メモ

**▶︎ TypeScriptの特徴**

JavaScriptに静的型付けしたもの
JavaScriptにトランスパイルできる

**▶︎ なぜTypeScript**

静的型付けによって変数や引数の型などドキュメント化できる
Linter的な役割（実行前のコンパイル時にエラーがわかる）を利用できる
コンパイラによってbabel的な役割（デフォルトではES3にコンパイルしてくれる）を利用できるため古いブラウザ環境にやさしい

**▶︎ 型について**

あくまでTypeScriptの型はtscコンパイラが使うもの
JavaScriptの型はjavaScriptエンジンが使うもの
全く別物

**▶︎ 型推論**
型推論できる

**▶︎ watch mode**
tsc {*.ts} --watch or -w

**▶︎ init tsc config**
tsc --init