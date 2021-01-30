import React from 'react'

import "./count-display.styles.scss"

const CountDisplay = ({compState}) => {
    const {count} = compState;
    return (
        <div className="count-display">
            <h1>{count}</h1>
        </div>
    )
}

export default CountDisplay
