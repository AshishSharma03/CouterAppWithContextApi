import React ,{useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';

function Display() {
    const {count} = useContext(CounterContext);


  return (
    <div>{count}</div>
  )
}

export default Display