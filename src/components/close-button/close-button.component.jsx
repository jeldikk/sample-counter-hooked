import React, {useMemo} from 'react'

import "./close-button.styles.scss"

// function createRecentAction(actionType = 'clear'){
//     return {
//         type: 'SET_RECENT_ACTION',
//         recentAction: actionType
//     }
// }

// function calculateIsRecent(recent){
//     return recent === 'clear' ? 'recent' : ''
// }

const CloseButton = ({actionDispatcher, compState}) => {

    const {recentAction} = compState;

    const recent = useMemo(() => {
        // console.log("used in useMemo");
        return recentAction === 'clear' ? 'recent' : ''
    },[recentAction])

    // console.log({recent})

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
        <div className={`close-button ${recent}`} onClick={clickHandler}>
            Clear Count
        </div>
    )
}

export default CloseButton
