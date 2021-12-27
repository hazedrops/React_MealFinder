import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import Recipe from './Recipe'

function SearchResults({ open, setIsOpen, onClose, recipes, clickedItem, setClickedItem }) {

  // console.log("In the search result");
  console.log(recipes.meals);
  // console.log(typeof(props.recipes));

  // setModal(false);

  return (
    <section className="searchResults">
      {recipes.meals && recipes.meals.map(meal => (
        <Recipe open={open} setIsOpen={setIsOpen} onClose={onClose} meal={meal} key={meal.idMeal} clickedItem={clickedItem} setClickedItem={setClickedItem} />        
      ))}
    </section>     
  )
}

export default SearchResults
