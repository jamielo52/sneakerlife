import React, {Component} from 'react';
import Navbar from '../containers/navbarContainer'; 
import Products from '../containers/productsContainer';
import ProductList from '../../../products.json';
import YourCart from '../containers/yourCartContainer';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: {}
    }

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(e, product, id) {
    const newCart = Object.assign({}, this.state.cart, {[id]: product})

    this.setState({
      cart: newCart
    });
  }

  removeFromCart(e, id) {
    let newCart = Object.assign({}, this.state.cart);
    delete newCart[id]

    this.setState({
      cart: newCart
    })
  }
  
  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />
        <div className="background-container">
          <h2 className="feature">Featured Sneakers</h2>
          <div className="container-fluid ">
            <div className="row card-deck">
              {ProductList.products.map((product, i) => {
                return(
                  <div className="col-md-3" key={i}>
                    <Products id={i} product={product} addToCart={this.addToCart}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <YourCart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        </div>
      </div>
    );
  }
}

export default (Home);