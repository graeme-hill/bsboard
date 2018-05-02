import React from 'react';

const Board = ({ options, frames, fetchFrames }) => {
    console.log('frame', frames);
    return (
        <div>
            <div onClick={() => fetchFrames(options.game, options.engine)}>
                {options.game}
            </div>
            <div>
                {options.engine}
            </div>
            <div>
                {frames.map(f => (
                    <div key={f.Turn}>Turn: {f.Turn}</div>
                ))}
            </div>
        </div>
    );
};

export default Board;