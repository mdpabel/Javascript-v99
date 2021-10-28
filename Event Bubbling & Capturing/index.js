document.getElementById("grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked!");
  },
  true // Capturing
);

document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked!");
  },
  false // Bubbling
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("child clicked!");
  },
  true // capturing
);
