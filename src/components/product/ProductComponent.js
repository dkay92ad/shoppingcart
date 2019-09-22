import React, { Component } from 'react';
import './ProductComponent.css';

class ProductComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			productCount: 0,
			imageVisible: false
		}
	}
	handleScroll = () => {
    //each product detail takes up 180px height..
    let visibleElements = parseInt(window.pageYOffset/160) + 3;
    if(this.props.product.Product_id <= visibleElements ){
      this.setState({imageVisible: true});
    }
  }
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll, true);
		//console.log('counting...');
		if(this.props.product.Product_id <= 3 ){
			this.setState({imageVisible: true});
		}
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll, true);
	}

	addToCartHandler = () => {
		this.setState((prevState) => {
			return {productCount: prevState.productCount + 1};
		});
		this.props.productAddHandler(this.props.product.Price);
	}

	removeFromCartHandler = () => {
		this.setState((prevState) => {
			return {productCount: (prevState.productCount === 0 ? 0: prevState.productCount - 1)};
		});
		this.props.productRemoveHandler(this.props.product.Price);
	
	}

	render() {
			return (
					<div className="product-details">
				<div className="product-details-left">
					<div className="product-image">
							{this.state.imageVisible && <img src={this.props.product.Image_url} alt='product'/>}
					</div>
					<div className="product-offer">
							<span>{this.props.product.Offer_text}</span>
					</div>
				</div>
				<div className="product-details-right">
					<div className="brand-name">{this.props.product.Brand_name}</div>
					<div className="product-name">{this.props.product.Product_name}</div>
					<div className="quantity">{this.props.product.Quantity}</div>
					<div className="mrp">MRP {this.props.product.MRP}</div>
					<div className="price">Rs {this.props.product.Price}</div>
					<div className="add-to-cart">
						<button 
						className="add-cart"
						onClick={() => {this.addToCartHandler()}} >ADD CART</button>
						<div className="inc-dec">
							<button 
							className="plus" 
							onClick={() => {this.addToCartHandler()}}>+</button>
							<span className="added-quantity">{this.state.productCount}</span>
							<button 
							className="minus"
							disabled={this.state.productCount === 0}
							onClick={() => {this.removeFromCartHandler()}}>-</button>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default ProductComponent;