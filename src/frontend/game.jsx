import React from 'react';
import * as BoggleBoard from './logic';

export default class Game extends React.Component{

    constructor(props) {
        super(props);
        const board = new BoggleBoard.Board(4);
        this.state = { 
            board: board, 
            collected: '', 
            time: {}, 
            seconds: 120 
        };

        this.baseState = this.state;
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.printBoard = this.printBoard.bind(this);
        this.countDown = this.countDown.bind(this);
    }


    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {

        if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
        clearInterval(this.timer);
        this.setState(this.baseState)
        }
    }


     printBoard(){
        let {board} = this.state;
        let temp = []

        for(let i = 0; i < board.grid.length; i++){
            temp.push(<div>{board.grid[i]}</div>)
        }

        return temp;

    }

    render(){

        return(
            <div>
                <h1>Boggle</h1>

                <div className='testing'>
                    <div>
                        <button onClick={this.startTimer}>Start</button>
                        m: {this.state.time.m} s: {this.state.time.s}
                    </div>
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