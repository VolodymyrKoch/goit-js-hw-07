const countProps = function (obj) {
  "use strict";
  // Write code under this line
  return Object.keys(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
// -----------------------------------------
let user = {
  name: "John",
  age: 30,
};
function count(obj) {
  return Object.keys(obj).length;
}

alert(count(user)); // 2
console.log(user["age"]); //30
console.log(user.age); //30
