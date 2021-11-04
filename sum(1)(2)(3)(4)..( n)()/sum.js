// function sum(a) {
//   return function (b) {
//     if (!b) {
//       return a;
//     }
//     return sum(a + b);
//   };
// }

const sum = (a) => (b) => b ? sum(a + b) : a;

const res = sum(1)(2)(3)(4)();
console.log(res);
