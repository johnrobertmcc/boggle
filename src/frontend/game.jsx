import React from 'react';
import Board from './board';
import * as ScrabbleBoard from './logic';

export default class Game extends React.Component{

    constructor(props) {
        super(props);
        const board = new ScrabbleBoard.Board(15);
        this.state = { board: board };
    }

    render(){

        return(
            <div>
                testing
                <Board board={this.state.board.grid} />
            </div>
        )
    }
}