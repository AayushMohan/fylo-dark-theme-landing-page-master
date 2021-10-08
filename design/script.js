"Use Strict";

const formError = document.getElementById("error");
const inputs = Array.form(document.getElementsByTagName("input"));

formError.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorCount = 0;

  if (inputs[0].value.length < 1) {
  }
});
