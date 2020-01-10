console.log("Hello from the console due to index.js file script");

const form = document.getElementById("contact-form");
form.addEventListener("submit", e => handleSubmit(e));

function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target.name.value);
}
