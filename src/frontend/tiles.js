export class Tiles{

  constructor(){

    this.bag = [];
    this.generateBag()

  }

  generateBag(){
    let test = new Tile('E', 1);
    this.bag.push(test)
  }
}

class Tile{
    
    constructor(letter, value){
        this.letter = letter;
        this.value = value;
    }


}