
import { useState } from 'react';
import './App.css';
import Gcircle from './Components/Gcircle';
import Mcircle from './Components/Mcirlce';
import Pcircle from './Components/Pcircle';
function App() {

  const [s,setS]=useState({backgroundColor :"rgba(0, 0, 139, 0.795)"});
  const [val,setVal] =useState(0);

 
 
  
  return (
    <div className='container'>

      <Gcircle val={val}/>


      <div className="control"> 
      <Pcircle  v={val} setv={setVal}/>
      <Mcircle v={val} setv={setVal}/>
    </div>






    </div>
  );
}

export default App;
