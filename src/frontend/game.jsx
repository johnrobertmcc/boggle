import React from 'react';
import Board from './board';
import * as Scrabble from './logic';

export default class Game extends React.Component{

    constructor(props) {
        super(props);
        const board = new Scrabble.Board(15).grid;
        this.state = { board: board };
    }

    render(){
        console.table(this.state.board)
        console.log(true)

        return(
            <div>
                testing
                <Board board={this.state.board} />
            </div>
        )
    }
}