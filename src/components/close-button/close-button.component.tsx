import React, {useMemo, MouseEvent} from 'react'

import {ActionType, StateType} from "../../models"

import "./close-button.styles.scss"

interface PropTypes{
    actionDispatcher: React.Dispatch<ActionType>;
    compState: StateType
}

const CloseButton: React.FC<PropTypes> = ({actionDispatcher, compState}) => {

    const {recentAction} = compState;

    const recent = useMemo(() => {
        // console.log("used in useMemo");
        return recentAction === 'clear' ? 'recent' : ''
    },[recentAction])

    // console.log({recent})

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
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
