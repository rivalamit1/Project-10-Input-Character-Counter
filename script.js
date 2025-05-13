const count = document.querySelector("p");
const input = document.querySelector("input");
// on--///
// input.addEventLIstener('keyup',()=>)
input.addEventListener('keyup',()=>{
    count.innerHTML = input.value.length;
});
