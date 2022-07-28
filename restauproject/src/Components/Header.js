import logo from "../images/logo.png"


function Header ()
{

    return(
        <header className="container">
                    <img   src={logo} />
                    <ul>
                        <li><a  href='#'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#menu'>Menu</a></li>
                        <li><a href='#popular'>Popular</a></li>
                        <li><a href="#fav">      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></a></li>
                    </ul>

                </header>




    )






}

export default Header ;