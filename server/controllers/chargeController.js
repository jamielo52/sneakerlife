import express from 'express';
import keys from '../../config/keys';
const stripe = require('stripe')(keys.stripeSecretKey);

export default {
  charge: (req, res) => {
    const data = req.body

    const cardInfo = {
      number: data.card.number,
      expMonth: parseInt(data.card.exp_month, 10),
      expYear: parseInt(data.card.exp_year, 10),
      cvc: data.card.cvc
    }

    stripe.tokens.create({
      card: {
        'number': cardInfo.number,
        'exp_month': cardInfo.expMonth,
        'exp_year': cardInfo.expYear,
        'cvc': cardInfo.cvc
      }
    }).then((res) => {
      const token = res.id

      stripe.customers.create({
        email: data.email,
        source: token
      }).then((customer) => {
        stripe.charges.create({
          amount: data.amount * 100,
          description: `Purchased ${data.products}`,
          currency: 'usd',
          customer: customer.id
        })
      })
    })
  }
}