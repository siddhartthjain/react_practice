import React from 'react'

const students =[
  {
    name: "siddharth",
    age: 12
  },
  {
    name: "vishal",
    age :16
  }
]
const Greet = () => {
  return (
    <div>
       {
        students.length == 0 ? (<p> no users to dislpay</p>):
        (
          
            students.map((student)=>{
              return( 
              <h1>
                hi your name is {student.name}
               </h1>
               )
              
            })
        
        )
       }
    </div>
  )
}

export default Greet