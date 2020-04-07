import { addItemToCart, removeItemFromCart } from './CartUtils';

const initState = {
  showDetails: false,
  cartItems:[]
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'HIDDEN_DETAILS':
        return {
          ...state,
          showDetails: !state.showDetails
        };
        case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
      default:return state
    }
  
};
export default cartReducer;
