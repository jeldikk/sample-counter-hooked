import React, {useReducer} from "react"
import './App.scss';
import {ActionType, StateType} from "./models"

import CountDisplay from "./components/count-display/count-display.component"
import DecrementButton from "./components/decrement-button/decrement-button.component"
import IncrementButton from "./components/increment-button/increment-button.component"
import CloseButton from "./components/close-button/close-button.component"

// type ReducerType = (state: StateType, action: ActionType) => StateType;

const initialState: StateType = {
  count: 0,
  recentAction: null
}

const reducer = function (state: StateType, action: ActionType) {
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'SET_RECENT_ACTION':
      return {
        ...state,
        recentAction: action.payload
      }
    case 'CLEAR':
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(state)

  return (

    <div className="app">
      <h3>Count display testing with Hooks</h3>
      <CountDisplay compState={state} />
      <div className="buttons">
        <DecrementButton actionDispatcher={dispatch} compState={state} />
        <IncrementButton actionDispatcher={dispatch} compState={state} />
        <CloseButton actionDispatcher={dispatch} compState={state} />
      </div>
    </div>
    
  );
}

export default App;
