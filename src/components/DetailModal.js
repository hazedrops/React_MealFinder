import ReactDOM from 'react-dom'
import Overlay from './Overlay'


function DetailModal({ open, setIsOpen, onClose, children, meal }) {
  console.log("in the Detail modal");


  if(!open) return null;

  return ReactDOM.createPortal(  
      <>            
        <Overlay />
        {children}
        {/* <div className="modal" style={MODAL_STYLES}>
          {/* <span className="closeModalButton" onClick={onClose}>X</span> */}
          
        {/* </div> */}
      </>,
      document.getElementById('portal')
    )
}

export default DetailModal;
 
 