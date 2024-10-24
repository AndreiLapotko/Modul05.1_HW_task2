document.addEventListener("DOMContentLoaded", () => {
  let name = JSON.parse(localStorage.getItem("name"));
  displayName(name);
});

const button = document.querySelector("button");
const nameInput = document.getElementById("nameInput");

button.addEventListener("click", () => {
  let name = nameInput.value.trim();
  localStorage.setItem("name", JSON.stringify(name));
  displayName(name);
  nameInput.value = "";
});

function displayName(name) {
    const output = document.getElementById("output");
    if (name) {
      output.innerHTML = `<p>${name}</p>`;
    } else {
      output.innerHTML = "<p>Укажите свое имя</p>";
    }
}