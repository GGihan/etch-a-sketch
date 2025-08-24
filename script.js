let container = document.querySelector("#container");

let topRow;

let squareDiv;

function multiply16Row() {
    for (let i = 0; i < 16; i++) {
        squareDiv = document.createElement("div");
        squareDiv.style.cssText = "flex-basis: 100%; border: black solid 2px";
        topRow.appendChild(squareDiv);
        squareDiv.classList.add("square");
    }
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        topRow = document.createElement("div");
        topRow.style.cssText = "display: flex; flex: 1; flex-direction: column";
        container.appendChild(topRow);
        multiply16Row();
    }
}

createGrid();

let allSquares = document.getElementsByClassName("square");
allSquares = Array.from(allSquares);

for (let square of allSquares) {
    square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
        setTimeout(() => {
            event.target.style.backgroundColor = "";
        }, 1000);
    });
}