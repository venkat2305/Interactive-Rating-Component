const form = document.getElementById("html-form");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const ratingChange = document.getElementById("change-rating");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let ans = document.querySelector("input[type='radio']:checked").value;
  ratingChange.textContent = `You selected ${ans} out of 5`;
  div1.classList.add("hidden");
  div2.classList.remove("hidden");
});
