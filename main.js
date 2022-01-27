function createGrid() {
    const divs = [];
    for (let i=0; i<16; i++) {
        for (let i=0; i<16; i++) {
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

const container = document.querySelector(".container");
createGrid();

const conDivs = document.querySelectorAll(".square");

conDivs.forEach(child => {
    child.addEventListener('click', (e) => {
        e.target.classList.add('hovered');
    })
})