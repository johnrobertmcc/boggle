//all the game logic will go here

//class tile
//has the 'bag' tht hols all the tiles


export class Board {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.grid = [];
    this.generateBoard();
  }

  generateBoard() {
    for (let i = 0; i < this.gridSize; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.gridSize; j++) {
        const tile = 'x'
        this.grid[i].push(tile);
      }
    }
  }

  lost() {

  }

  won() {

  }
}
