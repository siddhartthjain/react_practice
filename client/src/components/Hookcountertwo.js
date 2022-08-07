import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const Hookcountertwo = () => {

    const initialcount=0;
    const [count,setCount]= useState(initialcount);
   
  return (
    <div>Hookcountertwo
        <button type="button" onClick={()=>{setCount(count=>count+1)}}>increment {count}</button>
        <button type ="button" onClick={()=>{setCount(count<=0? initialcount: count=>count-1)}}>decrement {count}</button>
        <button type="button" onClick={()=>setCount(initialcount)}>reset </button>
    </div>
  )
}

export default Hookcountertwo