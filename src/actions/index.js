import { readAllFrames } from '../utils/engine-client';

export const gameOver = () => ({
    type: 'GAME_OVER'
});

export const requestFrames = (game, engine) => ({
    type: 'REQUEST_FRAMES'
});

export const receiveFrame = (frame) => ({
    type: 'RECEIVE_FRAME',
    frame
});

export const fetchFrames = (game, engine) => {
    console.log('...');

    return (dispatch) => {
        dispatch(requestFrames(game, engine));

        return readAllFrames(engine, game, (game, frame) => {
            // Workaround for bug where turn exluded on turn 0
            frame.Turn = frame.Turn || 0;
            dispatch(receiveFrame(frame));
        }).then(() => {
            dispatch(gameOver());
        });

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         console.log('fetch frames!!!', game, engine);
        //         dispatch(receiveFrame({ turn: 1 }));
        //         dispatch(receiveFrame({ turn: 2 }));
        //     }, 2000);
        // });
    };
}