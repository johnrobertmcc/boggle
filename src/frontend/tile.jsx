import React from 'react';

class PlayerTiles extends React.Component{

  printTiles(){
    let {letters} = this.props;
    let temp = [];
    for(let i = 0; i < letters.length; i++){
        temp.push(<div onClick={() => console.log(letters[i])}>{letters[i]}</div>)
    }

    return temp;
  }

  render() {
    return (
        <div className='player-tiles'>
          {this.printTiles()}
        </div>
    );
  }
}

export default PlayerTiles;
