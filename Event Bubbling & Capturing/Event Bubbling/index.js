document.getElementById("grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked!");
  },
  false
);

document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked!");
    e.stopPropagation(); // Propagation stopped
  },
  false
);

document.getElementById("child").addEventListener("click", (e) => {
  console.log("child clicked!");
});
