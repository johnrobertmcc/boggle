//import tile
import React from 'react';

export default class Board extends React.Component{

    // constructor(props){
    //     super(props)
    //     //this will take in the board as props
    //     //this will take in updateGame as props
    // }

    printBoard(){
        let {board} = this.props;
        let temp = []

        for(let i = 0; i < board.length; i++){
            temp.push(<div>{board[i]}</div>)
        }

        return temp;

    }

    render(){
    
        return(
            <div className='board'>
                {this.printBoard()}
            </div>
        )
    }
}