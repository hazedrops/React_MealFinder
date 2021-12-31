import { useState, useContext, useEffect } from 'react';
import DetailModal from './DetailModal';
import MealfinderContext from '../context/MealfinderContext';

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000
// }

function Recipe({ meal }) {
  const { isOpen, setIsOpen, handleClose, recipes, clickedItem, setClickedItem, finalIngredients, setFinalIngredients } = useContext(MealfinderContext);

  let tempFinalIngredients = [];

  // console.log('open: ', open);

  // const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (e) => {
    setClickedItem(e.target.attributes.dataname.value);

    setIsOpen(true);

    processIngredients();
    // console.log("Clicked Item is ... ", clickedItem);

  }

  const processIngredients = () => {
    const max = 21;

    for(let i=1; i <max; i++) {
      if(meal["strIngredient" + i] !== '' && meal["strMeasure" + i] !== '') {
        tempFinalIngredients.push(meal["strMeasure" + i] + " " +meal["strIngredient" + i]);
      }
    }

    setFinalIngredients(tempFinalIngredients);


    // let len = tempFinalIngredients.length;

    // tempFinalIngredients =  tempFinalIngredients.splice(0, len);
    // console.log("hERE", tempFinalIngredients);

    // setFinalIngredients(tempFinalIngredients.splice(0, len));

    // return finalIngredients;
  }

  // useEffect(() => {
  //   setFinalIngredients(finalIngredients)
  // }, [finalIngredients]);

  return (   
    <>

      <div className="row resultRowDiv" onClick={handleClick}>
        <div className="col-6 p-3">
          <a target="_blank">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="resultImg" dataname={meal.idMeal} />
          </a>
          <a target="_blank" className="resultLink">{meal.strMeal}</a>
        </div>
      </div>

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
                <h3>Ingredients</h3>
                {finalIngredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}                  
              </div>
            </div>  
            <div className="modalDirDiv">
            </div>
          </div>
        </DetailModal>        
        : null}  
    </>
  )
}

export default Recipe;
