import React from 'react'

const Restart = props => {
    return(
        <button className="restart" onClick={props.onClick}>
            Replay
        </button>
    );
}

export default Restart