import { useState } from 'react';
import './App.css';
import Card from './Card';
import Tot from './Tot';

function App() {
  const [score,setS]=useState(0);
  const  [i,setI]=useState(0);
  const q =[{
    q :"quel est la capitale de maroc ?",
    rep  :[{r :"RABAT" , isc :true},{r :"jedida" , isc :false},{r :"Marrakech" , isc :false}]
  },{
    q: "quel est le plat celebre chez les marocains ?",
    rep :[{
      r :"chahema" , isc :false
    },{
      r :"couscous" , isc :true
    },{
      r :"chewa" , isc :false

    }]

  },{
    q: "ou existe moulay 39oub ?",
    rep :[{
      r :"fes" , isc :true
    },{
      r :"merrack" , isc :false
    },{
      r :"agadir" , isc :false

    }]

  }]

    
  
  return (
    <div className="App">
      <div>
     {i<q.length ? <Card  a={q} b={i} c={setI} d={score} e={setS} /> : <Tot a={score}/>}
  </div>
    
    </div>
  );

}
export default App ;
