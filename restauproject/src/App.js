import { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';
import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Searchb from './Components/Searchb';
import Heading from './Components/Heading';
import Addfav from './Components/Addfav';
import Remove from './Components/Remove';
import Popular from './Components/Popular';
import Footer from './Components/Footer';
 

function App() {

  const [value,setValue]=useState("");
  const [query,setQuery]=useState("chicken");
  const [recipe,setRecipe]=useState([]);
  const [favourite,setFav]=useState([]);

  const savetolocal=(item)=>{
      localStorage.setItem("react-fav",JSON.stringify(item))
  }


  function search()
  {
    setQuery(value)




  }

  const getfood =async (query)=>{
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=7eaba875&app_key=102947945cbf17afeaad8256e20c3e6d`;
      const response = await fetch(url) ;
      const resJson = await response.json();
      console.log(resJson.hits)
      setRecipe(resJson.hits)

  }

  useEffect(()=>{
      getfood(query)
  },[query])

  function AddFavo(elem)
  {

      const tablefav=[...favourite,elem]
      setFav(tablefav);
      savetolocal(tablefav);
      



  }

  useEffect(()=>{
    const mealfav= JSON.parse(localStorage.getItem("react-fav"));
    if(mealfav!==null)
    {setFav(mealfav)}
    
  },[ ])

const remfav=(meal)=>
  {
    console.log("hello")
    const Nfavourite = favourite.filter((elem)=>{

       
     
         return  meal.recipe.label !== elem.recipe.label

        




    })

console.log(Nfavourite)
    setFav(Nfavourite);
    savetolocal(Nfavourite);
    
    





  }

const done = ()=>
  {
    window.scrollTo({

     Button:0,
      behavior:"smooth"
  
  
  })
  }








  return (
    <>
    <div className="Acceuil text-white">
      <span className="pass"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
</svg></span>
      <Header/>
      <div className='container text'>
      <h1>Welcome To <span>Uncle Sammy</span> Restaurant </h1>            
       <p>Good Food  , Good Mood</p><br/>
      <Searchb   s={setValue} q={search} />
      <br/>
      <Button />
    </div>
      
    </div>
<br></br>
    <div className='container  menu '  id="menu">
      <Heading title= "Explore Our Meals"/>
      <br></br>
      <div className='row mt-20'>
      <Recipe recipe={recipe} fav={Addfav} handleclick={AddFavo}/>
    </div>
    </div>


    <div className='container'  id="fav">
    <Heading title= "My Favourites Meals"/>
      <br></br>
      <div className='row mt-20'>
      <Recipe recipe={favourite} fav={Remove} handleclick={remfav} />
</div>
</div>
    <div className='container' id="popular"> 
      <Heading title="Our Popular Food" />
    <Popular/>
</div>

<div   id="about">
  <Footer/>

</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
