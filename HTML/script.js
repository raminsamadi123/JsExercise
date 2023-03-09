function onButton1Click() {
  const h1MainTitle = document.getElementById("mainTitle");
  console.log(h1MainTitle.textContent);
  h1MainTitle.textContent = "New Title";
  console.log(h1MainTitle.textContent);
};

function onButton2Click() {
  const age = parseInt(prompt("How old are you?"));
  alert("You are " + age + " years old!");
};
