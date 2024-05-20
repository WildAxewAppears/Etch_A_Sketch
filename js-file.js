const container = document.querySelector("#container");
const starterGrid = 16*16;

for (let i=0; i < starterGrid; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("gameDivs")
        container.appendChild(newDiv)
    }

const gameDiv = document.querySelectorAll(".gameDivs")

gameDiv.forEach((div) => {
   
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red"
    });
  });