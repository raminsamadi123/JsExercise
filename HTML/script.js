function removeStartQuizButton() {
  const startQuizButton = document.getElementById("startQuiz");
  if (startQuizButton) {
    startQuizButton.remove();
  };
};

function startQuiz() {
  removeStartQuizButton();
  addQuestion("Är solen varm?", "question1", "Alternativ 1");
  addQuestion("Är månen kall?", "question2", "Alternativ 1");
};

function addQuestion(question, name, choice) {
  const container = document.getElementById("container");
  
  const h3 = document.createElement("h3");
  h3.textContent = question
  
  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;

  const label = document.createElement("label")
  label.textContent = choice
  label.name = name

  container.appendChild(h3);
  container.appendChild(input);
  container.appendChild(label);
}
