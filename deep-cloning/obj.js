const obj = {
  a: 1,
  inner: {
    b: 2,
  },
};

// Shallow cloning -> obj -> // {b : 10}
// const clone = { ...obj };
// const clone = Object.assign({}, obj);

// Deep cloning -> obj -> // {b : 2}
const clone = JSON.parse(JSON.stringify(obj));

clone.inner.b = 10;

console.log(obj.inner);
