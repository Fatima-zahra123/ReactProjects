import { useState } from 'react';
import './App.css';
import Registe from './Components/Registe';
import Msg from './Components/Msg';
function App() {
  const [values ,setVal]=useState({
    firstName :"",
    lastName :"",
    email :""
  })
const [tr,setTr] =useState(false);
const [c ,setC] =useState({a:"eccrire first name",b:"ecrire last name",c:"ecrire ll"})
  function se(event)
  {
    
    event.preventDefault()
    setTr(true)
 
    
  }
  console.log(tr)
  return (
    
    <div className="App" >
        <form onSubmit={se}>
          {tr && values.firstName !="" && values.lastName !="" && values.email !="" ? <div>Successful , thank you for regestering</div>:""}
          <input placeholder='First name' name='fn' onChange={(e)=>{setVal({...values, firstName : e.target.value})} } />
          {tr && values.firstName=="" ? <span>{c.a}</span> :""}
          <input placeholder='Last name' name='ln' onChange={(e)=>{values.lastName = e.target.value;}} />
          {tr && values.lastName=="" ? <span>{c.b}</span> :""}
          <input  placeholder='Email' name='em' onChange={(e)=>{values.email = e.target.value;}}/>
          {tr && values.email=="" ? <span>{c.c}</span> :""}

          <button type='submit'  >Register</button>

        </form>
      
    </div>
   
  );
}

export default App;
