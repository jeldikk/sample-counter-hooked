import React, {useMemo} from 'react'

import "./decrement-button.styles.scss"

const DecrementButton = ({actionDispatcher, compState}) => {

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
