import React from 'react';
import './FooterDetailsComponent.css';

const FooterDetails = (props) => {
    return (
        <div className="footer-details">
            <div className="footer-left">
              <div className="left quantity">Qty {props.cartQty}</div>
              <div className="left total">Total {props.cartTotalPrice}</div>
            </div>
            <button 
            className = "footer-right" 
            disabled = {!props.cartTotalPrice}
            onClick = {() => {
              props.checkoutHandler();
            }}>CHECKOUT</button>
          </div>
    );
};

export default FooterDetails;