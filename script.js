let container = document.querySelector("#container");

let topRow;
let gridNum;
let squareDiv;

function multiply16Row(gridNum) {
    gridNum = gridNum || 16;
    for (let i = 0; i < gridNum; i++) {
        squareDiv = document.createElement("div");
        squareDiv.style.cssText = "flex-basis: 100%; border: black solid 2px";
        topRow.appendChild(squareDiv);
        squareDiv.classList.add("square");
    }
}

function createGrid(gridNum) {
    gridNum = gridNum || 16;
    for (let i = 0; i < gridNum; i++) {
        topRow = document.createElement("div");
        topRow.style.cssText = "display: flex; flex: 1; flex-direction: column";
        container.appendChild(topRow);
        multiply16Row(gridNum);
    }
}

createGrid();

let allSquares = document.getElementsByClassName("square");
allSquares = Array.from(allSquares);

function addHover() {
    for (let square of allSquares) {
        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "blue";
            setTimeout(() => {
                event.target.style.backgroundColor = "";
            }, 1000);
        });
    }    
}

addHover();

let newGridButton = document.querySelector("#newGridButton");
newGridButton.addEventListener("click", (event) => {
    let userGridNumber = prompt("Enter a number: 1-100");
    if (userGridNumber <= 100 && userGridNumber >= 1) {
        createNewGrid(userGridNumber);
    } else {
        alert("Enter a valid number!");
    }
    
});

function createNewGrid(gridNum) {
    container.replaceChildren();
    createGrid(gridNum);
    allSquares = document.getElementsByClassName("square");
    allSquares = Array.from(allSquares);
    addHover();
}
