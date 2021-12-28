import React, { useContext } from 'react';
import MealfinderContext from '../context/MealfinderContext';

function StatsDiv() {
  const {searchTerm, recipes, isLoading} = useContext(MealfinderContext);
  
  if(searchTerm.length === 0) {
      <h4>Please enter a search term...</h4>
  }

  if(!recipes && !isLoading) {
    return (
      <h4>No recipes found...</h4>
    )
  }
  
  return (
    <div className="statsDiv">
    { recipes.meals && <p className="stats">Displaying {recipes.meals.length} results.</p>}
    </div>   
  )
}


export default StatsDiv;
