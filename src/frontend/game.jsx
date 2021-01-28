import React from 'react';
import * as BoggleBoard from './logic';
import {applicationID, applicationKey} from '../keys';
import oxford from 'oxford-dictionary-api';


export default class Game extends React.Component{

    constructor(props) {
        super(props);
        const board = new BoggleBoard.Board(4);
        this.state = { 
            board: board, 
            collected: '', 
            time: {}, 
            seconds: 120,
            letters: [],
            positions: [],
            found:[]
        };

        this.baseState = this.state;
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.printBoard = this.printBoard.bind(this);
        this.countDown = this.countDown.bind(this);
        this.shovelLetters = this.shovelLetters.bind(this);
        this.checkPos = this.checkPos.bind(this);
        this.checkWork = this.checkWork.bind(this);
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

    checkPos(a, b){
        for(let i = 0; i < a.length; i++){
            if(JSON.stringify(a[i]) === JSON.stringify(b)){
                return false
            }
        }

        return true
    }

    checkForWord(){

    }

    shovelLetters(letter, pos){
        if(this.checkPos(this.state.positions, pos)){
            this.setState({
                letters: this.state.letters.concat([letter]), 
                positions: this.state.positions.concat([pos])
            })
        }
    }


     printBoard(){
        let {board, letters} = this.state;
        let fin = []

        for(let i = 0; i < board.grid.length; i++){
            let temp = [];

            for(let j = 0; j < board.grid.length; j++){
                temp.push(
                <p 
                onClick={() => this.shovelLetters(board.grid[i][j].props.children, [i, j])}
                >
                {board.grid[i][j].props.children}
                </p>)
            }

            fin.push(<div>{temp}</div>)
        }

        return fin;

    }

    checkWork(){
        let oxforddictionaries = new oxford(applicationID, applicationKey);
        debugger
       
    }

    render(){
        return(
            <div>
                <h1>Boggle</h1>
                {this.checkWork()}
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
                {this.state.letters}
            </div>
        )
    }
}