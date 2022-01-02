import React, { useContext } from 'react';
import Recipe from './Recipe';
import MealfinderContext from '../context/MealfinderContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SearchResults() {  
  const { searchTerm, isOpen, setIsOpen, handleClose, recipes, clickedItem, setClickedItem } = useContext(MealfinderContext);

  // console.log("In the search result");
  console.log(recipes.meals);
  // console.log(typeof(props.recipes));

  // setModal(false);

  return (searchTerm.length !== 0) && (
    // <Container className="searchResults">
    <Container className="searchResults">
      <Row>
        {recipes.meals && recipes.meals.map(meal => (
          <Recipe meal={meal} key={meal.idMeal} />        
        ))}
      </Row>
    </Container>     
  )
}

export default SearchResults
