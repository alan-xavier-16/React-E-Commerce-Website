import CartActionTypes from "./cart.types";

/* Toggle cart dropdown display */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

/* Add item to cart */
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
