function createGrid() {
    const divs = [];
    for (let i=0; i<16; i++) {
        for (let i=0; i<16; i++) {
        divs.push(document.createElement('div'));
        }
    }
    divs.forEach(appendContainer);
}

function appendContainer(item) {
    container.appendChild(item);
}

const container = document.querySelector(".container");
createGrid();