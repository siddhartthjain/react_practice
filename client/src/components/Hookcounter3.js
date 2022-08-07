import React from 'react'
import { useState } from 'react'

const Hookcounter3 = () => {

const [name, setname]= useState({firstname:"", lastname:""});

const students=[{firstname:"siddharth",lastname:"jain"},{firstname:"shrey", lastname:"anand"}];

const submitchange=(e)=>
{
  e.preventDefault();
    if(name.firstname.length==0)
    {
        alert("enter first name");
    }
    else if(name.lastname.length==0)
    {
        alert("enter last name");
    }
    else{
          students.push(name);
          students.map((stu)=>
          {
               console.log(stu.firstname)
          })
    }
}
  return (
    <div>
        <form>
        <label> enter first name :</label>
         <input type="text" value ={name.firstname} onChange={(e)=>setname({...name,firstname:e.target.value})} placeholder="enter first name"></input>
         <br>
         </br>
         <label> enter last name :</label>
         <input type="text" value ={name.lastname} onChange={(e)=>setname({...name,lastname:e.target.value})} placeholder="enter last  name"></input>
         <h2> Your name is {name.firstname}</h2>
         <h2> Your name is {name.lastname}</h2>
         <button type='submit' onClick={submitchange}>click to submit</button>
         </form>
    </div>
  )
}

export default Hookcounter3