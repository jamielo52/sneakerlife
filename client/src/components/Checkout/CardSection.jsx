import React from 'react';

const CardSection = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">      
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            placeholder="4242 4242 4242 4242"
            value={props.card['cardNumber']}
            onChange={props.cardInputChange.bind(this, 'cardNumber')}
          />
        </div>
        <div className="form-group">
          <label>Expiration</label>
          <input
            type="text"
            className="form-control"
            id="Expiration"
            placeholder="MM/YYYY"
            value={props.card['exp']}
            onChange={props.cardInputChange.bind(this, 'exp')}
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>CVC</label>
              <input
                type="number"
                className="form-control"
                id="CVC"
                placeholder="CVC"
                value={props.card['cvc']}
                onChange={props.cardInputChange.bind(this, 'cvc')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CardSection;