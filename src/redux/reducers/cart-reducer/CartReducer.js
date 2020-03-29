import { addItemToCart } from './CartUtils';
const initState = {
  cartItems:[]
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      };
      default:return state
    }
  
};
export default cartReducer;
