const h1 = document.querySelector("h1")
const addBtn = document.getElementById("btn-increase")
const minusBtn = document.getElementById("btn-decrease")
let count = 0

addBtn.addEventListener("click", ()=>{
    count++
    h1.innerHTML = count
})


minusBtn.addEventListener("click", ()=>{
    count--
    h1.innerHTML = count
})