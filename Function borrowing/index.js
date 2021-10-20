/**
 * A way for an object to use the methods of another object without redefining that same method.
 * Call/apply call the function immediately, whereas bind returns a function that, when later executed,
 * will have the correct context set for calling the original function.
 */

const person1 = {
  fname: "MD",
  lname: "Pabel",

  getFullName: function (age, city) {
    console.log(`${this.fname} ${this.lname} from ${city}`);
  },
};

const person2 = {
  fname: "MD",
  lname: "X",
};

// person1.getFullName();
person1.getFullName.call(person2, undefined, "Comilla");
person1.getFullName.apply(person1, [undefined, "Dhaka"]);
const person2FullName = person1.getFullName.bind(
  person1,
  undefined,
  "Kishoreganj"
);
person2FullName();

function greeting() {
  console.log("Hello " + this.fname);
}

greeting.call(person1);
greeting.apply(person2);
const res = greeting.bind(person1);
res();
