const DEFAULT_SIZE = 64;
const DEFAULT_COLOR = '#FFFFFFF';

function createGrid(size) {
  const grid = document.querySelector("#grid");
  const cellSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    grid.appendChild(cell);

    cell.addEventListener("mouseover", drawCell);
  }
}

function drawCell(event) {
  event.target.style.backgroundColor = "#000000"
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
