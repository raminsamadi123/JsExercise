function startQuiz() {
  var questions = [
  {
    title: "Är månen kall?",
    alternative1: "Q1A1",
    alternative2: "Q1A2",
  },
  {
    title: "Är solen varm?",
    alternative1: "Q2A1",
    alternative2: "Q2A2",
  }
  ];

  for (var i = 0; i < questions.length; i++) {
    var questionObject = questions[i];
    var title = questionObject.title;
    var alternative1 = questionObject.alternative1;
    var alternative2 = questionObject.alternative2;

    console.log(alternative1);
    addQuestion(title, alternative1, alternative2);
  };
};

function addQuestion(title, alternative1, alternative2) {
  var container = document.getElementById("container");

  var h3 = document.createElement("h3");
  h3.textContent = title;
  container.appendChild(h3);

  var input1 = document.createElement("input");
  input1.type = "radio";
  input1.name = "question1";
  container.appendChild(input1);
  var label1 = document.createElement("label");
  label1.textContent = alternative1;
  label1.name = "question1";
  container.appendChild(label1);

  var input2 = document.createElement("input");
  input2.type = "radio";
  input2.name = "question1";
  container.appendChild(input2);
  var label2 = document.createElement("label");
  label2.textContent = alternative2;
  label2.name = "question1";
  container.appendChild(label2);
};
