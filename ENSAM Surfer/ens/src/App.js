import './App.css';
import Header from './Components/Header';
import Ensam from './Components/Ensam';
import { useState } from 'react';

function App() {
  const [left ,setLeft] =useState(0)
  // document.addEventListener("keydown",function(event){
  //   let key =event.keyCode;
  //   console.log(key)

  //   if(key ==39)
  //  {
  //    setLeft(left+4)
  //   console.log("hello")
  //  }
  //  else if(key == 38){
  //   console.log("holla")

  //  }

  // })

  return (
    <>

    <Header/>
    <Ensam l={left}/>
    
    
    </>
    
  
    
  


    
  );
}

export default App;
