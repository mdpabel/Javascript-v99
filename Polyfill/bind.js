/**
 * A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
 */

const person = {
  fname: "MD",
  lname: "Pabel",
};

function printFullName(city, country, test) {
  console.log(
    this.fname +
      " " +
      this.lname +
      " from " +
      city +
      " , " +
      country +
      " " +
      test
  );
}
const name = printFullName.bind(person, "Comilla");
name("Bangladesh", "test");

// Polyfill the bind method
Function.prototype.myBind = function (...args1) {
  const borrowedFunction = this;
  const params = args1.slice(1);

  return function (...args2) {
    borrowedFunction.apply(args1[0], [...params, ...args2]);
  };
};

const myName = printFullName.myBind(person, "Comilla");
myName("Bangladesh", "test");
