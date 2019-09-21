/*
Toggles dropdown view
*/
import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* Toggles display for Cart Dropdown */
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    /* Adds cart items to the array */
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cardItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
