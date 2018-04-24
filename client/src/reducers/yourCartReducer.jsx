const yourCart = (state=null, action) => {
  if (action.type === 'YOUR_CART') {
      return action.payload;
  }
  return state;
};

export default yourCart;