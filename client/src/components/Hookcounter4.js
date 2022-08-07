import React from 'react'
import { useState } from 'react'


const Hookcounter4 = () => {
    const [items, Setitems]= useState([]);
    // const [value, setvalue]= useState(0);
    const additem=()=>
    {
      Setitems([...items,{
        id: items.length,
        value: 12
      }]);
    }
    
  
  return (
    <div>
        <h1>hi</h1>
     {/* <input type={Number} value={value} onChange={(e)=>setvalue(e.target.value)}> </input> */}
        <button type='button' onClick={additem}>click me </button>
        {
            items.map((item)=>{<>{item.value}</>})
        }
    </div>
  )
}

export default Hookcounter4