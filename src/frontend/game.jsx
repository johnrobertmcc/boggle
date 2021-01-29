import React from 'react';
import * as BoggleBoard from './logic';
import data from './data/words_dictionary.json';

const board = new BoggleBoard.Board(4);
const baseState ={ 
            board, 
            collected: '', 
            time: {}, 
            seconds: 120,
            letters: [],
            positions: [],
            found:[],
            prevPos: null
        }

export default class Game extends React.Component{

    constructor(props) {
        super(props);
        this.state = baseState;
        this.timer = 0;

        this.startTimer = this.startTimer.bind(this);
        this.printBoard = this.printBoard.bind(this);
        this.countDown = this.countDown.bind(this);
        this.shovelLetters = this.shovelLetters.bind(this);
        this.checkPos = this.checkPos.bind(this);
        this.checkForWord = this.checkForWord.bind(this);
        this.validMove = this.validMove.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.score = this.score.bind(this);
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

        if (this.timer === 0 && this.state.seconds > 0) {
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
        if (seconds === 0) { 
            clearInterval(this.timer);
            this.setState(this.baseState)
        }
    }

    validMove(prevPos, pos){
        let x = pos[0];
        let y = pos[1];
      
        
        if(prevPos !== null){
            let x1 = prevPos[0];
            let y1 = prevPos[1];
            console.log(pos)
            console.log(prevPos)

            if(x1 === x && y - y1 !== 1){
                //going up
                return true;
            }else if( x1 === x && y - y1 !== -1){
                //going down
                return true;
            }else if(y === y1 && x - x1 !== 1){
                //going left
                return true;
            }else if(y === y1 && x1 - x !== 1){
                //going left
                return true;
            }else if(y - y1 === 1 && x1 - x === 1){
                //going diagonal up
                return true;
            }else if(y1 - y === 1 && x1 - x === 1){
                //going diagonal up
                return true;
            }else if(y - y1 === 1 && x - x1 === 1){
                //going diagonal up
                return true;
            }else if(y1 - y === 1 && x - x1 === 1){
                //going diagonal up
                return true;
            }
            

            
        }
       return prevPos === null ? true : false;
    }


    checkPos(a, b){
        for(let i = 0; i < a.length; i++){
            if(JSON.stringify(a[i]) === JSON.stringify(b)){
                return false
            }
        }

        return true
    }

    checkForWord(word){
        let temp = word.join('').toLowerCase();   
        
        if(data[temp] === 1 && temp.length > 2 && !this.state.found.includes(temp)){
            
            this.setState({
                found: this.state.found.concat(temp), 
                letters: [], 
                positions: [], 
                prevPos: null
            })
        }
    }

    shovelLetters(letter, pos){ 
        if(this.checkPos(this.state.positions, pos) && this.validMove(this.state.prevPos, pos)){
            this.setState({
                letters: this.state.letters.concat([letter]), 
                positions: this.state.positions.concat([pos]),
                prevPos: pos
            })
        }
    }

    foundWords(){
        let {found} = this.state;
        let list = [];

        for(let i = 0; i < found.length; i++){
            list.push(<li>{found[i]}</li>)
        }

        return list;
    }


    printBoard(){
        let {board} = this.state;
        let fin = []

        for(let i = 0; i < board.grid.length; i++){
            let temp = [];

            for(let j = 0; j < board.grid.length; j++){
                temp.push(
                <p 
                className='letters'
                onClick={() => this.shovelLetters(board.grid[i][j].props.children, [i, j])}
                >
                {board.grid[i][j].props.children}
                </p>)
            }

            fin.push(<div>{temp}</div>)
        }

        return fin;

    }

    resetGame(){
        board.resetBoard();
        this.setState(baseState);
    }

    score(){
        let score = 0;
        this.state.found.forEach(word => {
            let length = word.length;
            switch (length) {
                case 5:
                    score += 2;
                    break;
                case 6:
                    score += 3;
                    break;        
                case 7:
                    score += 4;
                    break;        
                case 8:
                    score += 11;
                    break;        
                default:
                    score += 1;  
                    break;
            }

        })

        return score;
    }


    render(){
        return(
            <div>
                <h1>Boggle</h1>
                {this.score()}
                {this.checkForWord(this.state.letters)}
                <div className='testing'>
                    <div className='button-sides'>
                        m: {this.state.time.m} s: {this.state.time.s}
                        <br></br>
                        <button onClick={this.startTimer}>Start</button>
                        <br></br>
                        <button onClick={e => this.resetGame()}>Reset Game</button>
                        <br></br>
                        <button onClick={() => this.setState({letters:[], prevPos: null, positions: []})}>Clear Word</button>
                    </div>
                    <div className='game-board'>
                        {this.printBoard()}
                    </div>

                    Words Collected
                    <ul>{this.foundWords()}</ul>
                </div>
                {this.state.letters}
                {this.state.prevPos}
            </div>
        )
    }
}