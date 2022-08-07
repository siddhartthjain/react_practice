import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';



const Hookseg = () => {
   const [count, Setcount]= useState(0); 
   
//    useEffect(() => {
     
//    Setcount();
    
//    }, [])
   




  return (
    <div>
        <button onClick={()=>Setcount(count+1)}> count{count} </button>
    </div>
  )
}

export default Hookseg