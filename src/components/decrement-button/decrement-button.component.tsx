import React, {useMemo} from 'react'
import {ActionType, StateType} from '../../models'
import "./decrement-button.styles.scss"

interface PropType{
    actionDispatcher: React.Dispatch<ActionType>;
    compState: StateType;
}

const DecrementButton: React.FC<PropType> = ({actionDispatcher, compState}) => {

    const {recentAction} = compState;

    const recent = useMemo(() => {
        // console.log("used in useMemo");
        return recentAction === 'decr' ? 'recent' : ''
    },[recentAction])

    // console.log({recent})

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
        <div className={`decrement-button ${recent}`} onClick={clickHandler}>
            Decrease (-)
        </div>
    )
}

export default DecrementButton
