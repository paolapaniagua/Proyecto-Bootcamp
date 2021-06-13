import React from 'react';
import '../Modal/Modal.css';
import PostItForm from '../PostItForm/PostItForm';


const Modal = ({ show, onClose, agregarPostIt }) => {

    return show ? (
        
        <div className="modal">
            <div className="modal-content">
                <button className="buttonx" onClick={onClose}>&times;</button>
                <PostItForm
                    agregarPostIt={agregarPostIt}
                />
            </div>
        </div>
    ) : null;
}

export default Modal;