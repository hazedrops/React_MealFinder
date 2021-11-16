import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import Recipe from './Recipe'

function SearchResults({ recipes }) {
  console.log("In the search result");
  console.log(recipes.meals);
  // console.log(typeof(props.recipes));

  return (
    <section className="searchResults">
      <div className="detailModalContainer">
        {recipes.meals && recipes.meals.map(meal => (
          <Recipe meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </section>
  )
}

export default SearchResults
