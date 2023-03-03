import { createPortal } from "react-dom"
import "./portal.css"

const Portal = ({isOpened, children, onClose}) =>{
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <div>
      <div className="macNoteContainer">
        <div className="modal">
          <div className="topPart">
            <div className="colors">
                <div className="red" onClick={onClose}></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>, 
    document.getElementById("portal")
  )
}

export default Portal

