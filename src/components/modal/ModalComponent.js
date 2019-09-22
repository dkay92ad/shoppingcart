import React from 'react';
import './ModalComponent.css';

const ModalComponent = (props) => {
    return (
        <div className="modal-popup">
            <div 
            title="Close" 
            className="close-modal-popup" 
            onClick = {()=>{props.closeModalHandler()}}>X</div>
            <div className="modal-content">
            <div className="total-price">Total price: ₹ {props.cartTotalPrice}</div>
            <div className="trans-success">Transaction successful!</div>
            </div>
        </div>
    );
};

export default ModalComponent;