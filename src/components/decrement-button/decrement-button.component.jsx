import React from 'react'

import "./decrement-button.styles.scss"

const DecrementButton = ({actionDispatcher, compState}) => {

    const clickHandler = () => {
        actionDispatcher({
            type: 'DECREMENT'
        })
        actionDispatcher({
            type: 'SET_RECENT_ACTION',
            payload: 'decr'
        })
    }

    return (
        <div className={`decrement-button ${compState.recentAction === 'decr' ? 'recent' : ''}`} onClick={clickHandler}>
            Decrease (-)
        </div>
    )
}

export default DecrementButton
