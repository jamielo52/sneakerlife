import React, { Component } from 'react';
import axios from 'axios';
import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      },
      card:{
        cardNumber: '',
        exp: '',
        cvc: '',
      },
      products: '',
      total: 0,
      purchaseSuccess: false
    }

    this.addressInputChange = this.addressInputChange.bind(this);
    this.cardInputChange = this.cardInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const product = [];
    let price = 0;
    if (Object.keys(this.props.yourCart).length > 1) {
      for (let key in this.props.yourCart) {
        product.push(this.props.yourCart[key]['name']);
        price = price + this.props.yourCart[key]['price'];
        this.setState({
          products: product.join(' AND '),
          total: price
        });
      }
    } else {
      for (let key in this.props.yourCart) {
        this.setState({
          products: this.props.yourCart[key]['name'],
          total: this.props.yourCart[key]['price']
        });
      }
    }
  }

  addressInputChange(key, e) {
    const oldAddress = this.state['address'];
    const newAddress = this.state['address'];
    const value = e.target.value;
    newAddress[key] = value;

    this.setState({
      oldAddress: newAddress,
    });
  }

  cardInputChange(key, e) {
    const oldCard = this.state['card'];
    const newCard = this.state['card'];
    const value = e.target.value;
    newCard[key] = value;

    this.setState({
      oldCard: newCard,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let isAddressValid = false;
    let isCardValid = false;
    let isAllValid = false;

    for (let x in this.state['address']) {
      if (this.state['address'][x].length > 0) {
        isAddressValid = true;
      } 
    }
    
    for (let y in this.state['card']) {
      if (this.state['card'][y].length > 0) {
        isCardValid = true;
      }
    }

    if (isAddressValid && isCardValid) {
      isAllValid = true;
    }


    if (isAllValid) {
      const split_exp = this.state['card']['exp'].split('/')
      const payment = {
        number: this.state['card']['cardNumber'],
        exp_month: split_exp[0],
        exp_year: split_exp[1],
        cvc: this.state['card']['cvc']
      }
      
      axios.post('/charge', {
        card: payment,
        email: this.props.auth.user.email,
        products: this.state.products,
        amount: this.state.total
      }).then((res) => {
        console.log(res.data)
        if(res.status === 200){ 
          this.setState({purchaseSuccess: true});
        }
      });
    } else {
      alert('Input Your Information');
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div>Checkout:</div>
          {
            Object.keys(this.props.yourCart).map((key, i) => {
              return(
                <div key={i}>
                  {this.props.yourCart[key]['name'] + ' : $' + this.props.yourCart[key]['price']}
                </div>
              )
            })
          }
          <AddressSection 
            address={this.state.address}
            addessInputChange={this.addressInputChange}
          />
          <CardSection
            card={this.state.card}
            cardInputChange={this.cardInputChange}
          />
          <button type="submit" className="btn btn-default">Finalize Payment</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;