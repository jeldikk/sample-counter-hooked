import React from 'react'

import "./increment-button.styles.scss"

const IncrementButton = ({actionDispatcher, compState}) => {
    console.log(compState)
    const clickHandler = (event) => {
        actionDispatcher({
            type: 'INCREMENT'
        })
        actionDispatcher({
            type: 'SET_RECENT_ACTION',
            payload: 'incr'
        })
    }
    return (
        <div className={`increment-button ${compState.recentAction === 'incr' ? 'recent' : ''}`} onClick={clickHandler}>
            Increase(+)
        </div>
    )
}

export default IncrementButton
