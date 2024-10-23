document.addEventListener("DOMContentLoaded", () => {
  let name = JSON.parse(localStorage.getItem("name"));
  displayName(name);
});

const button = document.querySelector("button");
const inputName = document.getElementById("nameInput");

button.addEventListener("click", () => {
  let name = inputName.value.trim();
  saveName(name);
  displayName(name);
  inputName.value = "";
});

function displayName(name) {
    const output = document.getElementById("output");
    if (name) {
      output.innerHTML = `<p>${name}</p>`;
    } else {
      output.innerHTML = "<p>Укажите свое имя</p>";
    }
}

function saveName(name) {
  localStorage.setItem("name", JSON.stringify(name));
}