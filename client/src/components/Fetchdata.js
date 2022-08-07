import React, { useState , useEffect} from 'react'
import axios from 'axios'
const Fetchdata = () => {
const [users, setusers]= useState({});
const [x,setx]= useState(1);
const [y,sety]= useState(0);
useEffect(()=>
{
    axios.get(`https://jsonplaceholder.typicode.com/users/${y}`).then((res)=>{
        console.log(res);
        setusers(res.data);
    }).catch((err)=>{console.log(err)});
},[y]);

const detectchange= (e)=>
{
  e.preventDefault();
  if(x>10)
  {
    alert("pass value less than equal to 10");
  }
  sety(x);

}

  return (
    <div>
        <input type="text" value={x} onChange={(e)=>{setx(e.target.value)}}></input>
        <button type ="submit" onClick={detectchange}> clickme</button>
        {
           users.name
          
        }
    </div>
  )
}

export default Fetchdata