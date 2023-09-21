

const initialValue = {
    cart: 0,
    count: 0
  };
  
  export const cartReducer = (sate = initialValue, action) => {
    switch (action.type) {
      case "UPDATE_CART":
        const num = action.payload;
        return { 
          cart:num,
          count :5
        };
      default:
        return sate;
    }
  };
  