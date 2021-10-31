document.getElementById("root").addEventListener("click", (e) => {
  if (e.target.id && e.target.className === "product") {
    e.target.className = e.target.className + " selected";
  }
});
