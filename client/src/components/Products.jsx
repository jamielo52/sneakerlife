import React from 'react';
import AddToCart from './Cart/AddedToCart';
import NotLoggedIn from './Cart/NotLoggedIn';

const Products = (props) => {
  if (props.auth.isAuthenticated) {
    return (
      <div>
        <div className="card-custom">
          <img className="card-img-top" src={require(`../../public/images/${props.product.filename}`)} alt="Card image cap" />
          <div className="card-body card-text">
            <h5 className="card-title">{props.product.name}</h5>
            <div className="card-text price">{'$' + (props.product.price).toString()}</div>
            <button 
              className="add-cart-button"
              onClick={((e) => props.addToCart(e, props.product, props.id))}
              data-toggle="modal"
              data-target="#addedToCart"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div>
          <AddToCart product={props.product} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="card-custom">
        <img className="card-img-top" src={require(`../../public/images/${props.product.filename}`)} alt="Card image cap" />
        <div className="card-body card-text">
          <h5 className="card-title">{props.product.name}</h5>
          <div className="card-text price">{'$' + (props.product.price).toString()}</div>
          <button 
            className="add-cart-button"
            data-toggle="modal"
            data-target="#notloggedin"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div>
        <NotLoggedIn />
      </div>
    </div>
  )
}


export default Products;
