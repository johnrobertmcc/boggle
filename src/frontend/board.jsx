//import tile

export default class Board extends React.Component{

    constructor(props){
        super(props)
        //this will take in the board as props
        //this will take in updateGame as props
        this.rows = this.rows.bind(this)
        this.tiles = this.tiles.bind(this)
    }

    render(){
        //this is forrender tiles
        return(
            <div className='board'>
                {/* {this.rows()} */}
            </div>
        )
    }

    rows(){
        //return mapped out board using css grid
        let [board] = this.props;

        return board.grid.map((row, i) => {
            return(
                <div
                 className='row'
                 key={i}
                >
                    {this.tiles(row, i)}
                </div>
            )
        })
    }

    tiles(row, i) {

        return row.map((tile, i) => {
            return(
                <Tile
                 tile={tile}
                 updateGame={this.props.updateGame}
                 key={i}
                />
            )
        })
    }
}