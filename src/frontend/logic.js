export class Board {
  constructor(gridSize) {
    this.grid = []
    this.gridSize = gridSize
    this.generateBoard();
  }

  generateBoard() {
    for(let i = 0; i < this.gridSize; i++){
      let row = [];
      let half = (this.gridSize - 1)/2;

      for(let j = 0; j < this.gridSize; j++){
        let value;
        // value = i == j ? 2 : 1;
        if(i === j && i !== half){
          value = 2;
        }else if(i + j === this.gridSize - 1){
          value = 2
        }else if(i == half && j == half ){
          value = 'X'
        }else{
          value = 1
        }
        

        let space = new Place(value, [i,j]);
        row.push(space.place)
      }
      this.grid.push(row)
    }
  
  }
}

class Place{

  constructor(value, position){
    this.value = value;
    this.place = [];
    this.position = position;
    this.generateImage();
  }

  image(value){
    switch (value) {
      case 3:
        return (<div onClick={() => console.log(`${this.position}`)}>[3]</div>);
      case 2:
        return (<div onClick={() => console.log(`${this.position}`)}>[2]</div>);
      case 'X':
        return (<div onClick={() => console.log(`${this.position}`)}>[X]</div>);
      default:
        return (<div onClick={() => console.log(`${this.position}`)}>[1]</div>);
    }
  }

  generateImage(){
    this.place.push(this.image(this.value))
  }
}

// Place = {value: value, image: image}