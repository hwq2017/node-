
// 扩展运算符 ’...‘ 等于rest参数的逆运算
var a = [2,3];
console.log(...a);// 2 3

//  rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了
var fun = (...b) => (b);
console.log(fun(1,2,3));// [1,2,3]



//  rest 参数代替arguments变量的例子
function sortNumber(){
  return Array.prototype.slice.call(arguments).sort();
}
console.log(sortNumber(1,2,3,4,0));


var sortnumber = (...number) => (number.sort());
sortnumber(1,2,4,3);
