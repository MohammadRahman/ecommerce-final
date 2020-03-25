const initState = {};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "SOHW_CART_DROPDOWN": {
      return {
        ...state
      };
    }
  }
};
export default cartReducer;
