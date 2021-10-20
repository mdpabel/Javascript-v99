function multiply(num1) {
  return function (num2) {
    console.log(num1 * num2);
  };
}

const multiplyBy2 = multiply(2);
multiplyBy2(4);

const multiplyBy3 = multiply(3);
multiplyBy3(4);
