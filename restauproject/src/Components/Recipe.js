import "../App.css"
import React, { useState } from "react";
import Pop from "./Pop";
function Recipe(props)
{
    const [id ,setId] = useState([])
    function se(i)
    {
        let newi = [...id , i]
        setId(newi)

    }



    const Favcom =props.fav;
        return(
          <>
            {
                props.recipe.map(function(elem ,index){
                    
                    return(
                        < div className="col-md-4  col-sm-6 text-dark m-container"  id="rect">
                        <div className="card text-center"  id="card" >
                        <div className="card-header text-center">
                        <img src={elem.recipe.image}/>
                        </div>
                    
                        <div className="card-body">
                     <h3 >{elem.recipe.label}</h3>
                     <p><strong>Calories : </strong>{elem.recipe.calories}</p>
                     <button onClick={()=>se(index)}>ingredient</button>
                    {/* <details>
                        <summary>Ingredients</summary>
                        <div >
                        <p>
        
                        <ul>
                                {elem.recipe.ingredientLines.map(function(elem){
                                  return <li>{elem}</li>
                                })} 
                        </ul>
        
                        </p>
                   </div>
                    </details> */}
        
                    </div>  
                     <div className="overlay d-flex align-items-center justify-content text-center" onClick={()=>props.handleclick(elem)}> 

                        <Favcom />
                    </div>
        
                </div>
                <Pop  a={elem}  i={index} id={id} se={setId}/>
  
                </div>

                    )



                })



            }
          
                               
                 
</>
         
        )

 



}


export default Recipe ;