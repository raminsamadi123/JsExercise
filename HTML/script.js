function onButton1Click() {
  const h1MainTitle = document.getElementById("mainTitle");
  const inputField = document.getElementById("inputField");
  h1MainTitle.textContent = inputField.value;
};

function onButton2Click() {
  const age = parseInt(prompt("How old are you?"));
  alert(`You are ${age} years old!`);
};
