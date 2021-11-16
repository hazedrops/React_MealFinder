import React from 'react'
import DetailModalContainer from './DetailModalContainer';

function Recipe( { meal } ) {
  const showDetailModal = () => {
    return (
      <DetailModalContainer meal={meal} />
    );
  }

  return (
    <div className="row resultRowDiv">
      <div className="col-6 p-3">
        <a target="_blank" onClick={showDetailModal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="resultImg" />
        </a>
        <a target="_blank" className="resultLink">{meal.strMeal}</a>
      </div>
    </div>
  )
}

export default Recipe
