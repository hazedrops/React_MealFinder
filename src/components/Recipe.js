import { useState, useEffect } from 'react';
import DetailModal from './DetailModal';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

function Recipe( { open, setIsOpen, onClose, meal, clickedItem, setClickedItem } ) {
  let [finalIngredients, setFinalIngredients] = useState([]);

  console.log('open: ', open);

  // const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (e) => {
    setClickedItem(e.target.attributes.dataname.value);

    setIsOpen(true);

    processIngredients();
    // console.log("Clicked Item is ... ", clickedItem);

  }

  const processIngredients = () => {
    const MaxNum = 21;

    for(let i=1; i < MaxNum; i++) {
      if(meal["strIngredient" + i] == '' && meal["strMeasure" + i] == '') {
        break;        
      } else {        
        finalIngredients.push(meal["strMeasure" + i] + " " +meal["strIngredient" + i]);
        // finalIngredients = [...finalIngredients];
      }
    }

    return finalIngredients;
  }

  

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

      {open && clickedItem === meal.idMeal ?         
        <DetailModal open={open} setIsOpen={setIsOpen} onClose={onClose} meal={meal} style={MODAL_STYLES}>
          <div className="detailModal">
            <span className="closeModalButton" onClick={onClose}>X</span>
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
