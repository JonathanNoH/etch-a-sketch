function createGrid(size) {
    const divs = [];
    for (let i=0; i<size; i++) {
        for (let i=0; i<size; i++) {
        divs.push(document.createElement('div'));
        }
    }
    divs.forEach(addClass);
    divs.forEach(appendContainer);
}

function addClass(item) {
    item.classList.add('square');
}

function appendContainer(item) {
    container.appendChild(item);
}

function resetBoard() {
    let userSize = prompt("Enter a size for new board. (Must be less than 100)", "");
    while (!(userSize > 0 && userSize <= 100)) {
        userSize = prompt("Error. Please enter a number between 0 and 100.", "")
    }
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        container.removeChild(square);
    })
    createGrid(userSize);
    addListeners();
}

function addListeners() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(child => {
        child.addEventListener('mouseover', (e) => {
            e.target.classList.add('hovered');
        })
    })
}

const container = document.querySelector(".container");
createGrid(16);
addListeners();


const resetButton = document.querySelector(".reset");

resetButton.addEventListener('click', resetBoard);