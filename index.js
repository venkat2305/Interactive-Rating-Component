const form = document.getElementById("html-form")
console.log(form)

let ans = document.querySelector("input[name='my-radio-input']:checked")
console.log(ans.textContent)

form.addEventListener("submit",function(){
  
  console.log("venkat")
})