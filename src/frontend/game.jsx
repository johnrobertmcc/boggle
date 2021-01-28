import React from 'react';
import * as ScrabbleBoard from './logic';
// import {Tiles} from './tiles';

export default class Game extends React.Component{

    constructor(props) {
        super(props);
        const board = new ScrabbleBoard.Board(4);
        // debugger
        const bag = new ScrabbleBoard.Tiles().bag;
        this.state = { board: board, bag: bag, collected: '' };
        this.baseState = this.state;

        this.printBoard = this.printBoard.bind(this);
        this.countdown = this.countdown.bind(this);
    }

     printBoard(){
        let {board} = this.state;
        let temp = []

        for(let i = 0; i < board.grid.length; i++){
            temp.push(<div>{board.grid[i]}</div>)
        }

        return temp;

    }

    countdown(){
        var timeleft = 10;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 10 - timeleft;
        timeleft -= 1;
        }, 1000);
    }

    render(){

        return(
            <div>
                <h1>Boggle</h1>

                <div className='testing'>
                    <progress value="0" max="10" id="progressBar"></progress>
                    <div className='game-board'>
                        {/* <div>Remaining Tiles: {this.state.bag}</div> */}
                        {this.printBoard()}
                    </div>
                Words Collected:
                {/* <ul>{this.state.collected}</ul> */}
                </div>
            </div>
        )
    }
}