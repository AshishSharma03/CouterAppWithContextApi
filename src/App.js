import React, { useReducer } from 'react'
import DecButton from './component/DecButton';
import Display from './component/Display';
import IncButton from './component/IncButton';
import { CounterContext } from './Store/CouterContext';
import Reducer, { initialState } from './Store/Store'
import './App.css'
import ResetButton from './component/ResetButton';


function App() {
  const [count , dispatch] = useReducer(Reducer,initialState);
    
   
   return (  
    <CounterContext.Provider value={{count ,dispatch}}>
   <div className="App">
    <div className='CounterBox'>
        <IncButton />
        <Display/>
        <DecButton/>
    </div>
    
      <ResetButton/>
   </div>
    </CounterContext.Provider>
  )
}

export default App