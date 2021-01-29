

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
        row.push(<p>{space.place}</p>)
      }
      this.grid.push(row)
    }
  
  }

  resetBoard(){
    this.grid = [];
    this.generateBoard();
  }

  checkWord(word){
    var checkWord = require('check-word'),
    words     = checkWord('en');

    words.check(word)
  }
}


class Place{

  constructor(position){
    this.place = [];
    this.position = position;
    this.generateImage();
  }

  randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyztimetimetimetimetimetimetime"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }


  generateImage(){
    this.place.push(this.randomLetter())
  }
}
