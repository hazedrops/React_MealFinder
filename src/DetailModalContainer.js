import React from 'react'

function DetailModalContainer({ meal }) {
  
    return (
      <div className="detailModalContainer">
        <div className="detailModal">
          <span className="closeModalButton">X</span>
          <div className="modalTitle">{meal.strMeal}</div>
            <div className="modalImgIng">
              <div className="modalImgDiv"></div>
            </div>  
        </div>
      </div>
    )
  
}

export default DetailModalContainer
 
