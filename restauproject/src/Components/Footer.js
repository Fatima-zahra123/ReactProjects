import "./Heading"
import Heading from "./Heading";
function Footer()
{

    return(
        <>

            <div  className='container text-white' id="foot">
        <div  id="form" >
            <Heading title="Registration"/>
            <br/>

            <form>

                <label>Username</label>
                <input type="text"/>
                <br/><br/>
                <label>Email</label>
                <input type="text"/>
                <br/><br/>
                <label>Password</label>
                <input type="password"/>

                <br/><br/>
                <label></label>
                <button type="button" id="btn">Submit</button>






            </form>



        </div>

        <div id="para" 
        >
            <Heading title="About Us"/>
            <br/>
            <p>Our restaurant <span>Uncle Sammy</span> is the best resturant in the worlds , We prepare the best meals ,You can find every meal you wish </p>
            <br/>
           <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
       </svg>Sidi Othman ,Avenue Nil 1500 CASABLANCA  </p> 







        </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
        
        </>






    )




}


export default Footer;