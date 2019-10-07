import React from 'react';
import ReactDOM from 'react-dom'


const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmed modal visible active">
            <div className="ui standard modal visible active">
                A modal sdsdnksjdc
            </div>
        </div>,
        document.querySelector('#modal')
    )
}
 
export default Modal;