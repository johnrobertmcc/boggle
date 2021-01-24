//import tile
import React from 'react';

export default class Board extends React.Component{

    // constructor(props){
    //     super(props)
    //     //this will take in the board as props
    //     //this will take in updateGame as props
    // }

    render(){
        return(
            <div className='board'>
                {this.props.board}
            </div>
        )
    }
}