
var fun = (a) => (a);

console.log(fun(2));

var f = (a) => {
  var b = 3;
  return a + b;
};
console.log(f(2));

var func = (id,name) => ({id: id, name: name});
console.log(func(3,'lisi'));

var fun1 = (...num) => (num);
console.log(fun1(1,2,3,4,5,6,0));

var fun2 = (...num) => {
  var sum = 0;
  for(var val of num){
    sum += val;
  }
  return sum;
};
console.log(fun2(1,2,3,4,0));


var person = {
  first:'lisi',
  last:'lala'
}
var full = ({ first, last }) => first + ' ' + last;

console.log(full(person));


var d = [2,3,1,4];
d.map(functin(x){
  return x * x;
});
