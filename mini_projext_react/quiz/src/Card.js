
function Card(props)
{
    function ch(a)
    {
        props.c(props.b+1)
        if (a===true)
        {
            props.e(props.d+1)
            alert("h")
            console.log(props.d)
        }
        
        
    }
    
    return(
      
        Array(props.a[props.b]).map((elem)=>{
            return(
              <>
              <h1>{elem.q}</h1>
              <ul>
               { elem.rep.map((e)=>{
                  return(
                   //on fait la fonction sans parametre
                    <li onClick={()=>ch(e.isc)}>{e.r}</li>
                   
                    
                  )
                })
              }
              </ul>
           </> )
          })
    
    );
    

}

export default Card;