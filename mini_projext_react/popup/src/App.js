import { useState } from 'react';
import './App.css';
import Pop from './Pop';

function App() {
  const [t, setT] = useState(false)
  return (
    <div className="App">
             <div className="col-md-4  col-sm-6 text-dark m-container" id="rec" >
               <div class="card " id="card"><div class="card-header">
                 <img src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"/></div>
                 <div class="card-body"><h3>Chicken Vesuvio</h3><p><strong>Calories : </strong>4228.043058200812</p>
             <button type='button' onClick={()=>{setT(true)}}>Ingredients</button>
             
             
             </div></div>
             
             <Pop tr={t} st={setT}>
             <p><ul><li>1/2 cup olive oil</li><li>5 cloves garlic, peeled</li><li>2 large russet potatoes, peeled and cut into chunks</li><li>1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)</li><li>3/4 cup white wine</li><li>3/4 cup chicken stock</li><li>3 tablespoons chopped parsley</li><li>1 tablespoon dried oregano</li><li>Salt and pepper</li><li>1 cup frozen peas, thawed</li></ul></p>
                </Pop>
             </div>

    </div>
  );
}

export default App;
{/* <details><summary>Ingredients</summary><p><ul><li>1/2 cup olive oil</li><li>5 cloves garlic, peeled</li><li>2 large russet potatoes, peeled and cut into chunks</li><li>1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)</li><li>3/4 cup white wine</li><li>3/4 cup chicken stock</li><li>3 tablespoons chopped parsley</li><li>1 tablespoon dried oregano</li><li>Salt and pepper</li><li>1 cup frozen peas, thawed</li></ul></p></details> */}