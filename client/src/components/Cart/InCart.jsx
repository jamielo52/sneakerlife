import React from 'react';

const InCart = (props) => {
  return (
    <div className="container in-cart">
      <div className="row">
        <div className="col-md-6">
          <img className="card-img-top img-cart" src={require(`../../../public/images/${props.product.filename}`)} alt="Card image cap" />
        </div>
        <div className="col-md-6 product-info">
          <div>
            {props.product.name}
            <span>
              <i className="fa fa-times-circle" aria-hidden="true" onClick={((e) => props.removeFromCart(e, props.id))}></i>
            </span>
          </div>
          <div className="product-price-cart">{'$' + (props.product.price).toString()}</div>
        </div>
      </div>
    </div>
  )
}


export default InCart;