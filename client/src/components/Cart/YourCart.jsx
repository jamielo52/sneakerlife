import React, { Component } from 'react';
import InCart from './InCart';

const YourCart = (props) => {
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
                  Object.keys(props.cart).length === 0 ? 
                  <div>
                    <div>Nothing in your cart,</div>
                    <div className="empty-cart">start shopping.</div> 
                  </div> :
                  Object.keys(props.cart).map((key, i) => {
                    return(
                      <div key={i}>
                        <InCart id={key} product={props.cart[key]} removeFromCart={props.removeFromCart}/>
                      </div>
                    )
                  })
                }
              </div>
              <div className="pricing">
                Total
                <span className="total-price">{
                  Object.keys(props.cart).length === 0 ? ' $0' :
                  ' $' + (Object.values(props.cart).map(product => (product.price))
                                                        .reduce((producta, productb) => producta + productb)).toFixed(2)
                }</span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="modal-button" data-dismiss="modal">Back</button>
              <button type="button" className="modal-button" data-dismiss="modal">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourCart;