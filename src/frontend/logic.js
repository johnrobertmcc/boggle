export class Board {

  constructor(gridSize) {
    this.grid = []
    this.gridSize = gridSize
    this.generateBoard();
  }

  generateBoard() {
    for(let i = 0; i < this.gridSize; i++){
      let row = [];

      for(let j = 0; j < this.gridSize; j++){
        let space = new Place([i,j]);
        row.push(<p onClick={() =>console.log(space.place)}>{space.place}</p>)
      }
      this.grid.push(row)
    }
  
  }
}


class Place{

  constructor(position){
    this.place = [];
    this.position = position;
    this.generateImage();
  }


  generateImage(){
    this.place.push('X')
  }
}

// Place = {value: value, image: image}