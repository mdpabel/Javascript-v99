document.getElementById("grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked!");
    e.stopPropagation(); // Propagation stopped
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked!");
  },
  true
);

document.getElementById("child").addEventListener("click", (e) => {
  console.log("child clicked!");
});
