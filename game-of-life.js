class Cell {
  tableCell; // table cell `td`
  neighbours; // array of table cells
  isAlive; // boolean
  nextIsAlive; // boolean

  constructor(tableCell, isAlive) {
    this.tableCell = tableCell;
    this.isAlive = isAlive;
  }

  updateNextIsAlive() {
    // TODO: implement
    /*
     * Rules whether a cell is alive or dead.
     * 1. If cell is dead and exactly 3 neighbours are alive, this cell will be born.
     * 2. If cell is alive and less than 2 neighbours are alive, this cell dies.
     * 3. If cell is alive and exactly 2 or 3 neighbours are alive, this cells stays alive.
     * 4. If cell is alive and more than 3 neighbours are alive, this cell dies.
     */
  }
  updateIsAlive() {
    // TODO: implement
  }
}

const table = undefined; // TODO: get the table element from html
const tableRows = undefined; // TODO: get the row elements from the table

const cells = [];
for (let rowNumber = 0; rowNumber < tableRows.length; rowNumber++) {
  const row = tableRows[rowNumber];
  const rowCells = undefined; // TODO: get the table cell elements `td` from the row

  // TODO: Make each table row a new array in the `cells` array. That means it will be 2 dimensional.
  // First dimenions has arrays representing a row.
  // Second level will contain cells.

  for (let column = 0; column < rowCells.length; column++) {
    // TODO: Per cell (`td`) in the table, create a new `Cell` and add it to the array `cells`.
    // TODO: Hand in the table cell to the cell constructor.
    // Give every cell a starting value for `isAlive`. It should be random. Choose a proper likelihood to determine whether a cell is alive or not.
  }
}
for (let row = 0; row < cells.length; row++) {
  for (let column = 0; column < cells[row].length; column++) {
    // TODO: find the neighbours of the current cell and set the `neighbours` attribute of the cell.
    // The neighbours will never change.
    const neighbours = [];
    cells[row][column].neighbours = neighbours;
  }
}

setInterval(() => {
  updateCells();
  updateCellColors();
}, 300);

function updateCells() {
  // TODO: Update the cells whether they are alive or not.
  // Hint: First update `nextIsAlive` and then afterwards update `isAlive`
  // All cells should update at the same time. If you would update one by one, that would cause side effects.
  // A cell might die before the next can update itself with the right value.
  // That's why there are 2 TODOs in this function.

  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells[row].length; column++) {
      // TODO
    }
  }

  // TODO
}

function updateCellColors() {
  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells[row].length; column++) {
      const cell = cells[row][column];
      // TODO: paint the background of the cell with a color if it `isAlive`.
      // TODO: paint the background of the cell white if it is dead.
    }
  }
}
