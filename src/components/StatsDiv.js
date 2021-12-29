import React, { useContext } from 'react';
import MealfinderContext from '../context/MealfinderContext';

function StatsDiv() {
  const {searchTerm, recipes, isLoading} = useContext(MealfinderContext);
  
  if(isLoading) {
      <h4>Loading...</h4>
  }

  if(!recipes.meals) {
    return (
      <h6>No recipes found...</h6>
    )
  }
  
  // return isLoading ? (
  return (searchTerm.length !== 0) && (
    <div className="statsDiv">
    { recipes.meals && <p className="stats">Displaying {recipes.meals.length} results.</p>}
    </div>   
  )
}


export default StatsDiv;
