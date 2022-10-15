import React ,{useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';
import { ACTION } from '../Store/Store';


function ResetButton() {
    const {dispatch} = useContext(CounterContext)
    const onReset =()=>{
        dispatch({type: ACTION.RESET,})
    }

  return (
    <button onClick={onReset}>Reset</button>
  )
}

export default ResetButton