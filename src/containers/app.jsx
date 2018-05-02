import { connect } from 'react-redux';
import { parseUrl } from '../utils/args';
import Board from '../components/board';
import { fetchFrames } from '../actions';

const options = parseUrl();

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return {
        options: options,
        frames: state.frames
    };
};

const mapDispatchToProps = dispatch => ({
    fetchFrames: (game, engine) => dispatch(fetchFrames(game, engine))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);