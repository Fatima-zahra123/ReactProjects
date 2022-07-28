
function Searchb(props)
{
    const style={
        width : "400px",
        height : "50px" ,
        padding :"20px" ,
        borderRadius : "50px",
        border :"none"



    }

    const style1 ={
        borderRadius : "50px",
        width :"fit-content" ,
        backgroundColor :'white',                                                                                                           
       
    }

    const style2 ={
        display: "inline" ,
        width : "50px" ,
        height :"50px",
        backgroundColor :'white',
        border :"none",
        borderRadius : "50px",

    
        
    }
    return (

        <div id="input" style={style1}><input type="text" placeholder='Search' id="s"  onChange={(e)=>{props.s(e.target.value)}}  style={style}/><button  type='button' onClick={()=>{props.q()}} style={style2}><i class="fas fa-search" ></i></button></div>




    )






}

export default Searchb ;