import React, {useMemo, MouseEvent} from 'react'
import {ActionType, StateType} from "../../models"
import "./increment-button.styles.scss"

interface PropType{
    actionDispatcher: React.Dispatch<ActionType>;
    compState: StateType;
}

const IncrementButton: React.FC<PropType> = ({actionDispatcher, compState}) => {


    const {recentAction} = compState;

    const recent = useMemo(() => {
        // console.log("used in useMemo");
        return recentAction === 'incr' ? 'recent' : ''
    },[recentAction])

    // console.log({recent})

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        actionDispatcher({
            type: 'INCREMENT'
        })
        actionDispatcher({
            type: 'SET_RECENT_ACTION',
            payload: 'incr'
        })
    }
    return (
        <div className={`increment-button ${recent}`} onClick={clickHandler}>
            Increase(+)
        </div>
    )
}

export default IncrementButton
