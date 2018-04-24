// import axios from 'axios';
// import key from '../../../config/keys';
// const stripe = require('stripe')(key.stripeSecretKey)

// function createStripeToken(card) {
//   return new Promise((res, rej) => {
//     Stripe.setPublishableKey(key.stripePublishableKey);
//     Stripe.card.createToken(card, (status, res) => {
//       if (res.error) {
//         rej(res.error);
//       } else {
//         res(res.id);
//       }
//     })
//   })
// }

// function performCheckout(product, address, token) {
//   console.log(`Send ${token} to backend then to Stripe API to charge customer`)
// }

// export function completeCheckout(product, address, payment) {
//   const payload = Scriptly.loadJavascript('https://js.stripe.com/v3/')
//                           .then(() => {createStripeToken(payment)})
//                           .then((token) => {performCheckout(product, address, token)})

//   return {
//     type: 'COMPLETE_CHECKOUT',
//     payload
//   }
// }