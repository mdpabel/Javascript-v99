const username = document.getElementById("username");
const password = document.getElementById("password");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

username.addEventListener("invalid", () => {
  if (username.value === "") {
    username.setCustomValidity("Username is required.");
  } else if (username.value.length < 3) {
    username.setCustomValidity("Username must be more than 3 character.");
  }
});
