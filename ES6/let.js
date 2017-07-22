
/*
let命令，用来声明变量。它的用法类似于var，
但是所声明的变量，只在let命令所在的代码块内有效。
*/

{
  let a = 10;
  var b = 19;
  console.log(a);
}
console.log(b);

// let 的作用域在for 循环里
for (let i = 0; i < 5; i++) {
console.log(i);
}

var a = [];
for (var i = 0; i < 10; i++) {

  a[i] = function () {
    console.log(i);
  };
}
a[6]();// 10


var b = [];
for (let i = 0; i < 10; i++) {
  b[i] = function () {
    console.log(i);
  };

}
b[6]();

function f1() {
  var n = 5;
  console.log(n);
  if (true) {
    var n = 10;
  }
  // console.log(n); // 5
}
f1();
