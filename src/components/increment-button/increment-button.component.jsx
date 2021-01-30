import React, {useMemo} from 'react'

import "./increment-button.styles.scss"

const IncrementButton = ({actionDispatcher, compState}) => {


    const {recentAction} = compState;

    const recent = useMemo(() => {
        // console.log("used in useMemo");
        return recentAction === 'incr' ? 'recent' : ''
    },[recentAction])

    // console.log({recent})

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
        <div className={`increment-button ${recent}`} onClick={clickHandler}>
            Increase(+)
        </div>
    )
}

export default IncrementButton
