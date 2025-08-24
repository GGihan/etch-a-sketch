let container = document.querySelector("#container");

let topRow;

let squareDiv;

function multiply16Row() {
    for (let i = 0; i < 16; i++) {
        squareDiv = document.createElement("div");
        squareDiv.style.cssText = "width: 46px; height: 46px; border: black solid 2px";
        topRow.appendChild(squareDiv);
        squareDiv.classList.add("square");
    }
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        topRow = document.createElement("div");
        topRow.style.cssText = "display: flex;";
        container.appendChild(topRow);
        multiply16Row();
    }
}

createGrid();