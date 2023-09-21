export const updateCart = (quantity) => {
    return {
      type: "UPDATE_CART",
      payload: quantity,
    };
  };
  
  
  
  export const getCart = (state) => {
      return state.cartReducer.cart;
  }
  
  export const getCount = (state) => {
    return state.cartReducer.count;
  }
  