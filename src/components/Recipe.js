import { useContext } from 'react';
import DetailModal from './DetailModal';
import MealfinderContext from '../context/MealfinderContext';

import Col from 'react-bootstrap/Col';

function Recipe({ meal }) {
  const { isOpen, setIsOpen, handleClose, recipes, clickedItem, setClickedItem, finalIngredients, setFinalIngredients } = useContext(MealfinderContext);

  let tempFinalIngredients = [];

  const handleClick = (e) => {
    setClickedItem(e.target.attributes.dataname.value);

    setIsOpen(true);

    processIngredients();
    // console.log("Clicked Item is ... ", clickedItem);
  }

  const processIngredients = () => {
    const max = 21;

    for(let i=1; i <max; i++) {
      if(meal["strIngredient" + i] !== "" && meal["strMeasure" + i] !== "") {
        tempFinalIngredients.push(meal["strMeasure" + i] + " " +meal["strIngredient" + i]);
      }
    }

    console.log("Ing:", tempFinalIngredients);
    setFinalIngredients(tempFinalIngredients);
  }

  return (   
    <>
      <Col className="mb-3" sm={12} md={6} xl={4} onClick={handleClick}>
        <a target="_blank">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="resultImg" dataname={meal.idMeal} />
        </a>
        <a target="_blank" className="resultLink"  dataname={meal.idMeal} onClick={handleClick}>{meal.strMeal}</a>
      </Col>        

      {isOpen && clickedItem === meal.idMeal ?         
        <DetailModal open={isOpen} setIsOpen={setIsOpen} onClose={handleClose} meal={meal} >
          <div className="detailModal">
            <span className="closeModalButton" onClick={handleClose}>X</span>
            <h1 className="modalTitle">{meal.strMeal}</h1>
            <div className="modalImgIng">
              <div className="modalImgDiv">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div className="modalIngDiv">
                <span className="modalIngredientTitle">Ingredients</span>
                {finalIngredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}                  
              </div>
            </div>  
            <div className="modalDirDiv">
              <span className="modalDirTitle">Directions</span>
              <p className="modalDirections">{meal.strInstructions}</p>                  
            </div>
          </div>
        </DetailModal>        
        : null}  
    </>
  )
}

export default Recipe;
