const textAreaEl = document.getElementById("text-area");
const maxLengthEl = textAreaEl.getAttribute("maxlength");

document.addEventListener("keyup",function(){
        updateCounter();
});

function updateCounter(){
    document.getElementById("total-counter").innerText = textAreaEl.value.length;
    document.getElementById("remaining-counter").innerText = maxLengthEl - textAreaEl.value.length;
}