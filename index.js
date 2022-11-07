const form = document.querySelector("form")
form.addEventListener("submit",function(){
  const ans = document.querySelector(".input[type='radio']:checked")
  console.log(ans.value)
})