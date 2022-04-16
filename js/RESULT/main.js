let math = document.getElementById("math");
let english = document.getElementById("english");
let science = document.getElementById("science");
let computer = document.getElementById("computer");
let tMarks = document.getElementById("tMarks");
let percentage = document.getElementById("percentage");
let grade = document.getElementById("grade");
let table = document.querySelector("table");
function result() {
  if (
    math.value === "" ||
    english.value === "" ||
    science.value === "" ||
    computer.value === ""
  ) {
    alert("Please fill the marks");
    return false;
  }

  if (
    math.value < 0 ||
    math.value > 100 ||
    english.value < 0 ||
    english.value > 100 ||
    science.value < 0 ||
    science.value > 100 ||
    computer.value < 0 ||
    computer.value > 100
  ) {
    alert("Marks should be between 0 to 100");
    return false;
  }

  let mathValue = math.value;
  let scienceValue = science.value;
  let englishValue = english.value;
  let computerValue = computer.value;

  //   calculating total Marks

  let totalMarks =
    Number(mathValue) +
    Number(scienceValue) +
    Number(englishValue) +
    Number(computerValue);
  tMarks.textContent = totalMarks;

  //   calculating total percentage

  let totalPercentage = totalMarks / 4;
  percentage.textContent = `${totalPercentage}%`;

  //   garde
  if (totalPercentage <= 33) {
    grade.textContent = "Fail";
    table.style.background = "orange";
  } else if (totalPercentage <= 60) {
    grade.textContent = "Second Class";
    table.style.background = "aqua";
  } else if (totalPercentage <= 75) {
    grade.textContent = "First Class";
    table.style.background = "pink";
  } else {
    grade.textContent = "Distenction";
    table.style.background = "green";
  }
}
