import { useState } from "react";

function Pop(props)
{
    const b= props.a;
   

        function setn(i)
        {

               const newid = props.id.filter(function(elem)
               {
                        return elem !=i

               })

               props.se(newid)

        }
    
    return(props.id.includes(props.i))?(
        <div id="ing">
                <button onClick={()=>{setn(props.i)}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg></button>
                <div>
                <div >
                        <p>
        
                        <ul>
                                {b.recipe.ingredientLines.map(function(elem){
                                  return <li>{elem}</li>
                                })} 
                        </ul>
        
                        </p>
                   </div>
                </div>
        </div>
   ):("")
}


export default Pop;