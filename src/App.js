import React, { Component } from 'react';
import './App.css';
//import {product_image} from '/assets/images/Isha_Ghee.jpg';
class App extends Component {
  constructor(){
    super();
    this.state = {
      product: {}
    }
  }

  componentDidMount(){
    fetch('/data/data.json').then(
      (response) => {
        return response.json();
      }
    ).then(
      (data) => {
        console.log(data);
        this.setState({product: data.product_list[0]});
      }
    ).catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Sample
            <img src={this.state.product.Image_url}/>
            {/* <img src={'/assets/images/Isha_Ghee.jpg'} alt='image'/> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
