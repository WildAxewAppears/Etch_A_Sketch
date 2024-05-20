const container = document.querySelector("#container");
const starterGrid = 16*16;
const newGrid = document.querySelector("#newGrid");

for (let i=0; i < starterGrid; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("gameDivs");
        container.appendChild(newDiv);
    };

const gameDiv = document.querySelectorAll(".gameDivs")

gameDiv.forEach((div) => {
   
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red"
    });
  });

  function createNewGrid() {
    let askNumber = prompt("Enter a Grid Size: (Max 100px)");
    if (isNaN(askNumber) || askNumber === "" || askNumber >= 100) {
        alert("Invalid input. Please enter a number less than 100.");
        return;
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const gridNumber = askNumber * askNumber;
        for (let i = 0; i < gridNumber; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("gameDivs2");

            newDiv.style.cssText = `
                width: calc(100% / ${askNumber});
                height: calc(100% / ${askNumber});
            `;

            container.appendChild(newDiv);
        }

        const gameDiv2 = document.querySelectorAll(".gameDivs2");
        gameDiv2.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red";
            });
        });
    }
}

newGrid.addEventListener("click", createNewGrid);