const containerEl = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div"); 
    containerEl.appendChild(colorContainerEl);
    colorContainerEl.classList.add("color-container");
}

const colorContainerEls = document.querySelectorAll(".color-container");

colorGenerator();



function colorGenerator(){
  colorContainerEls.forEach((colorContainerEl) => {
    const newColor = randomColor();
    colorContainerEl.style.backgroundColor = "#"+newColor;
    colorContainerEl.innerText = "#"+randomColor();
  });

}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorLength = 6;
    let colorCode = "";
    for(let i=0;i<colorLength;i++){
        const randomNumber = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNumber,randomNumber+1);
    }
    return colorCode;
}