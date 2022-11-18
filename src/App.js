import React, {useState} from 'react'
import RecipeList from './RecipeList'

function App() {
  const [list, setRecipes] = useState([])
  return (
    <>
  <RecipeList />
  <input type="text" />
  <button>Add recipe</button>
  <button>Delete</button>
  <div>0 Left</div>
    </>
  )
}

export default App;
