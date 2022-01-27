function createGrid(size) {
    if (size > 100) return;
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
    return;
}

const container = document.querySelector(".container");
createGrid(16);

const squares = document.querySelectorAll(".square");

squares.forEach(child => {
    child.addEventListener('mouseover', (e) => {
        e.target.classList.add('hovered');
    })
})

const resetButton = document.querySelector(".reset");

resetButton.addEventListener('click', resetBoard);