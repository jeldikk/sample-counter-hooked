import React from 'react'
import {StateType} from "../../models"
import "./count-display.styles.scss"

interface PropType{
    compState: StateType;
}

const CountDisplay: React.FC<PropType> = ({compState}) => {
    const {count} = compState;
    return (
        <div className="count-display">
            <h1>{count}</h1>
        </div>
    )
}

export default CountDisplay
