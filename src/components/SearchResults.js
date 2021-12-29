import React, { useContext } from 'react';
import Recipe from './Recipe';
import MealfinderContext from '../context/MealfinderContext';

function SearchResults() {  
  const { searchTerm, isOpen, setIsOpen, handleClose, recipes, clickedItem, setClickedItem } = useContext(MealfinderContext);

  // console.log("In the search result");
  console.log(recipes.meals);
  // console.log(typeof(props.recipes));

  // setModal(false);

  return (searchTerm.length !== 0) && (
    <section className="searchResults">
      {recipes.meals && recipes.meals.map(meal => (
        <Recipe open={isOpen} setIsOpen={setIsOpen} onClose={handleClose} meal={meal} key={meal.idMeal} clickedItem={clickedItem} setClickedItem={setClickedItem} />        
      ))}
    </section>     
  )
}

export default SearchResults
