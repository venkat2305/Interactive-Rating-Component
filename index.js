const form = document.getElementById("html-form");
const div1 = document.getElementById("js-form-panel");
const div2 = document.getElementById("js-thankyou-panel");
const ratingChange = document.getElementById("change-rating");

function ratingPrint() {
  let ans = document.querySelector("input[type='radio']:checked").value;
  ratingChange.textContent = `You selected ${ans} out of 5`;
  div1.classList.add("hidden");
  div2.classList.remove("hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ratingPrint();
});
