class Cell {
  tableCell;
  neighbours;
  isAlive;
  nextIsAlive;

  constructor(tableCell, isAlive) {
    this.tableCell = tableCell;
    this.isAlive = isAlive;
  }

  updateNextIsAlive() {
    const aliveNeighbours = this.neighbours.filter((neighbour) => neighbour.isAlive).length;
    if (!this.isAlive && aliveNeighbours === 3) {
      this.nextIsAlive = true;
    } else if (this.isAlive && aliveNeighbours < 2) {
      this.nextIsAlive = false;
    } else if (this.isAlive && (aliveNeighbours === 2 || aliveNeighbours === 3)) {
      this.nextIsAlive = true;
    } else if (this.isAlive && aliveNeighbours > 3) {
      this.nextIsAlive = false;
    }
  }
  updateIsAlive() {
    this.isAlive = this.nextIsAlive;
  }
}

const table = document.getElementsByTagName('table')[0];
const tableRows = table.getElementsByTagName('tr');

const cells = [];
for (let rowNumber = 0; rowNumber < tableRows.length; rowNumber++) {
  const row = tableRows[rowNumber];
  const rowCells = row.getElementsByTagName('td');

  if (cells[rowNumber] === undefined) {
    cells.push([]);
  }

  for (let column = 0; column < rowCells.length; column++) {
    cells[rowNumber].push(new Cell(rowCells[column], Math.random() > 0.8));
  }
}
for (let row = 0; row < cells.length; row++) {
  for (let column = 0; column < cells[row].length; column++) {
    const neighbours = [
      cells[row - 1]?.[column - 1],
      cells[row - 1]?.[column],
      cells[row - 1]?.[column + 1],
      cells[row]?.[column - 1],
      cells[row]?.[column + 1],
      cells[row + 1]?.[column - 1],
      cells[row + 1]?.[column],
      cells[row + 1]?.[column + 1],
    ].filter((cell) => !!cell);

    cells[row][column].neighbours = neighbours;
  }
}

setInterval(() => {
  updateCells();
  updateCellColors();
}, 300);

function updateCells() {
  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells[row].length; column++) {
      cells[row][column].updateNextIsAlive();
    }
  }

  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells[row].length; column++) {
      cells[row][column].updateIsAlive();
    }
  }
}

function updateCellColors() {
  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells[row].length; column++) {
      const cell = cells[row][column];
      if (cell.isAlive) {
        cell.tableCell.style.backgroundColor = 'black';
      } else {
        cell.tableCell.style.backgroundColor = 'white';
      }
    }
  }
}
