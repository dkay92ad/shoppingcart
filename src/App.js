import React, { Component, Suspense } from 'react';
import './App.css';
import FooterDetailsComponent from './components/footer-details/FooterDetailsComponent';
import ModalComponent from './components/modal/ModalComponent';
import ErrorBoundaryComponent from './components/error-boundary/ErrorBoundaryComponent'; 
const ProductComponent = React.lazy(() => import('./components/product/ProductComponent'));

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      cartQty: 0,
      cartTotalPrice: 0,
      showModalPopup: false
    }
  }

  componentDidMount(){
    fetch('data/data.json').then(
      (response) => {
        return response.json();
      }
    ).then(
      (data) => {
        //console.log(data);
        this.setState({products: data.product_list});
      }
    ).catch((err) => {
      console.log(err);
    });
  }
  componentDidUpdate(){
    console.log('conponentDidUpdate...');
    /*this.setState(() => {
      throw new Error('hi');
    })*/
  }
  checkoutHandler = () => {
    this.setState({showModalPopup: true});
  }
  productAddHandler = (price) => {
    this.setState((prevState) => ({cartQty: prevState.cartQty + 1 ,
      cartTotalPrice: parseInt(prevState.cartTotalPrice) + parseInt(price)}));
  }
  productRemoveHandler = (price) => {
    this.setState((prevState) => ({cartQty: prevState.cartQty - 1 ,
      cartTotalPrice: prevState.cartTotalPrice - price}));
  }
  closeModalHandler = () => {
    this.setState({showModalPopup: false});
  }

  render() {
    const productsArrayDisplay = this.state.products.map((product) => {
      return (
        <Suspense key={product.Product_id} fallback={<div>Loading...</div>}>
          <ProductComponent 
          key={product.Product_id} 
          product = {product} 
          quantity = {this.state.cartQty}
          productAddHandler = {this.productAddHandler}
          productRemoveHandler = {this.productRemoveHandler} />
        </Suspense>
      );
    });

    return (
      <div className="App">
        <ErrorBoundaryComponent>
          {productsArrayDisplay}
          {this.state.showModalPopup && <ModalComponent 
          closeModalHandler = {this.closeModalHandler}
          cartTotalPrice = {this.state.cartTotalPrice}
          />}
          <footer>
            <FooterDetailsComponent 
            cartQty = {this.state.cartQty} 
            cartTotalPrice = {this.state.cartTotalPrice}
            checkoutHandler = {this.checkoutHandler}
            />
          </footer>
        </ErrorBoundaryComponent>
      </div>
    );
  }
}

export default App;
