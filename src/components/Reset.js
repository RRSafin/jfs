import React from 'react';
import './Reset.css'

function Reset({
                   makeReset = () => {}
               }) {

    return <div className="resetButton" onClick={makeReset}>Reset</div>;
}

export default Reset;