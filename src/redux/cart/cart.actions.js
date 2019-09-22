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

/* Remove Item from Cart */
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
