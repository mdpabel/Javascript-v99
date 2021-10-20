function multiply(num1, num2) {
  console.log(num1 * num2);
}

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(4);

const multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(4);
