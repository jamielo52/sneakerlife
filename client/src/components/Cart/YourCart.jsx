import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import InCart from './InCart';

class YourCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout: false
    }

    this.checkoutHandler = this.checkoutHandler.bind(this);
  }

  checkoutHandler(e) {
    e.preventDefault();
    const cart = this.props.cart;
    const context = this;

    context.props.yourCartAction(cart);
    this.setState({checkout: true})
  }

  render() {
    if (this.state.checkout) {
      return <Redirect to="/checkout" />
    }

    return(
      <div>
        <div className="modal fade" id="myModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Your Cart</h4>
              </div>
              <div className="modal-body">
                <div>
                  {
                    Object.keys(this.props.cart).length === 0 ? 
                    <div>
                      <div>Nothing in your cart,</div>
                      <div className="empty-cart">start shopping.</div> 
                    </div> :
                    Object.keys(this.props.cart).map((key, i) => {
                      return(
                        <div key={i}>
                          <InCart id={key} product={this.props.cart[key]} removeFromCart={this.props.removeFromCart}/>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="pricing">
                  Total
                  <span className="total-price">{
                    Object.keys(this.props.cart).length === 0 ? ' $0' :
                    ' $' + (Object.values(this.props.cart).map(product => (product.price))
                                                          .reduce((producta, productb) => producta + productb)).toFixed(2)
                  }</span>
                </div>
              </div>
              <div className="modal-footer">
                {
                  Object.keys(this.props.cart).length === 0 ?
                  <button type="button" className="modal-button" data-dismiss="modal">Back</button> :
                  <div>
                    <button type="button" className="modal-button" data-dismiss="modal">Back</button>
                    <button type="button" className="modal-button" data-dismiss="modal" onClick={this.checkoutHandler}>Checkout</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default YourCart;