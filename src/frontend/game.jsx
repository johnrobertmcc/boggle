import React from 'react';
import * as Scrabble from './logic';

export default class Game extends React.Component{

    constructor(props) {
        super(props);
        // const board = new Scrabble.Board(9, 10);
        // this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, empty) {
        //checks to see if spot is empty
        //if spot is empty, place the tile
        // this.setState({ board: this.state.board });
    }

    render(){

        return(
            <div>
                testing
                {/* <Board board={this.state.board} updateGame={this.updateGame} /> */}
            </div>
        )
    }
}