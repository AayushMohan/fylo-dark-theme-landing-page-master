"Use Strict";

const hideError = document.querySelector("#error");
const ctaBtn = document.querySelector("#cta__btn");

const newLocal = Array.form(document.getElementsByTagName("input"));

// formError.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let errorCount = 0;

//   if (inputs[0].value.length < 1) {
//   }
// });

ctaBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputs[0].value.length < 1) {
    document.querySelector("#error").toggleAttribute;
  }
});
