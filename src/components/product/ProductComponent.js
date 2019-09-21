import React,{useState} from 'react';
import './ProductComponent.css';

const Product = (props) => {
  const [productCount, setProductCount] = useState(0);

    return (
        <div className="product-details">
          <div className="product-details-left">
            <div className="product-image">
                <img src={props.product.Image_url} alt='product'/>
            </div>
            <div className="product-offer">
                <span>{props.product.Offer_text}</span>
            </div>
          </div>
          <div className="product-details-right">
            <div className="brand-name">{props.product.Brand_name}</div>
            <div className="product-name">{props.product.Product_name}</div>
            <div className="quantity">{props.product.Quantity}</div>
            <div className="mrp">MRP {props.product.MRP}</div>
            <div className="price">Rs {props.product.Price}</div>
            <div className="add-to-cart">
              <button 
              className="add-cart"
              onClick={() => {
                setProductCount((prevCount) => prevCount + 1);
                props.productAddHandler(props.product.Price);
              }} >ADD CART</button>
              <div className="inc-dec">
                <button 
                className="plus" 
                onClick={() => {
                  setProductCount((prevCount) => prevCount + 1);
                  props.productAddHandler(props.product.Price);
                }}>+</button>
                <span className="added-quantity">{productCount}</span>
                <button 
                className="minus"
                disabled={productCount === 0}
                onClick={() => {
                  setProductCount((prevCount) => {
                    return  prevCount === 0? 0: prevCount - 1
                  });
                  props.productRemoveHandler(props.product.Price);
                }}>-</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Product;