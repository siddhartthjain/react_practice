import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setcount]= useState(0);
   useEffect(
    ()=>{
       setInterval(setcount(count+1),1000);
    }
   ,[count]);
  return (
    <div>Useeffect
    
     {count} 
    </div>
  )
}

export default Useeffect