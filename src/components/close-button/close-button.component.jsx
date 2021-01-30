import React from 'react'

import "./close-button.styles.scss"

// function createRecentAction(actionType = 'clear'){
//     return {
//         type: 'SET_RECENT_ACTION',
//         recentAction: actionType
//     }
// }

const CloseButton = ({actionDispatcher, compState}) => {

    const clickHandler = (event) => {
        actionDispatcher({
            type: 'CLEAR',
        })
        // console.log("close button handler")
        actionDispatcher({
            type: 'SET_RECENT_ACTION',
            payload: 'clear'
        })
        // console.log(compState)
    }
    
    return (
        <div className={`close-button ${compState.recentAction === 'clear' ? 'recent' : ''}`} onClick={clickHandler}>
            Clear Count
        </div>
    )
}

export default CloseButton
