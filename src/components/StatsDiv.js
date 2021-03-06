import React, { useContext } from 'react';
import MealfinderContext from '../context/MealfinderContext';

function StatsDiv() {
  const {searchTerm, recipes, isLoading} = useContext(MealfinderContext);
  
  if(isLoading) {
      <h4>Loading...</h4>
  }

  if(!recipes) {
    return (
      <div className="statsDiv">
        <p className="stats">No recipes found...</p>
      </div>
    )
  }
  
  if(searchTerm && recipes.meals) {
    return (
      <div className="statsDiv">
      { recipes.meals && <p className="stats">Displaying {recipes.meals.length} results.</p>}
      </div>   
    )
  }    

  return null;
}


export default StatsDiv;
