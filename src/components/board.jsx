import React from 'react';
import './board.css';

class Board extends React.Component {
    componentDidMount() {
        this.props.fetchFrames(
            this.props.options.game, this.props.options.engine);
    }

    render() {
        const options = this.props.options;
        const grid = this.props.grid;

        return (
            <div>
                <div className="grid">
                    {grid.map((row, rowIndex) => (
                        <div className="row" key={'row' + rowIndex}>
                            {row.map((cell) => (
                                <div className={"cell " + (cell.isFood ? "food" : "")} key={'cell' + cell.index} style={{backgroundColor: cell.color}}>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

// const Board = ({ options, grid, fetchFrames }) => {
    
// };

export default Board;