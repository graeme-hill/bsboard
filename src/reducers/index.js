// import { combineReducers } from 'redux';
// import frames from './frames';

// export default combineReducers({
//     frames
// });

const frames = (state = {}, action) => {
    console.log('REDUCER', state, action);
    switch (action.type) {
        case 'RECEIVE_FRAME':
            console.log('FETCH_FRAMES reducer...')
            return {
                options: state.options,
                frames: [
                    ...state.frames,
                    action.frame
                ]
            };
        case 'REQUEST_FRAMES':
            console.log('REQUEST_FRAMES')
            return { ...state };
        case 'FETCH_FRAMES':
            console.log('FETCH_FRAMES reducer...')
            return { ...state };
        default:
            return { ...state };
    }
};

export default frames;