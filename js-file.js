const container = document.querySelector("#container");
const starterGrid = 16*16;
const newGrid = document.querySelector("#newGrid");
const resetButton = document.querySelector("#reset");

for (let i=0; i < starterGrid; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("newGameDiv");
        container.appendChild(newDiv);
    };

const StarteGameDiv = document.querySelectorAll(".newGameDiv")

StarteGameDiv.forEach((div) => {
    if (!div.dataset.brightness) {
        div.dataset.brightness = 100;
    }
   
    div.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        if(div.dataset.brightness != 0){

        let currentBrightness = div.dataset.brightness;
        currentBrightness = currentBrightness - 10;
        div.dataset.brightness = currentBrightness;
        div.style.filter = `brightness(${currentBrightness}%)`;

        }
        
        
    });
  });

  function createNewGrid() {
    let askNumber = prompt("Enter a Grid Size: (Max 100px)");
    if (isNaN(askNumber) || askNumber === "" || askNumber >= 100 || askNumber == null) {
        alert("Invalid input. Please enter a number less than 100.");
        return;
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const gridNumber = askNumber * askNumber;
        for (let i = 0; i < gridNumber; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("newGridDivs");

            newDiv.style.cssText = `
                width: calc(100% / ${askNumber});
                height: calc(100% / ${askNumber});
            `;

            container.appendChild(newDiv);
        }

        const newGridGameDiv = document.querySelectorAll(".newGridDivs");
        newGridGameDiv.forEach((div) => {
            if (!div.dataset.brightness) {
                div.dataset.brightness = 100;
            }

            div.addEventListener("mouseover", () => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

                if(div.dataset.brightness != 0){

                    let currentBrightness = div.dataset.brightness;
                    currentBrightness = currentBrightness - 10;
                    div.dataset.brightness = currentBrightness;
                    div.style.filter = `brightness(${currentBrightness}%)`;
            
                    }
            });
        });
    }
}

newGrid.addEventListener("click", createNewGrid);

function reset (){
    const actualGrid = document.querySelectorAll("#container div");
    actualGrid.forEach((div) => {
        div.style.backgroundColor = "white"
        div.dataset.brightness = 100
        let currentBrightness = div.dataset.brightness;
        div.style.filter = `brightness(${currentBrightness}%)`;
})
}

resetButton.addEventListener("click", reset)