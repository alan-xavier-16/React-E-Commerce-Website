/* Memoization of Cart Item Quantity to prevent re-render of 'quantity' when no changes occur */
import { createSelector } from "reselect";

/* 
Input Selector is a function that gets the entire state and returns a slice of it, i.e. our cart
*/
const selectCart = state => state.cart;

/* 
Output Selector use createSelector and ALL input selectors as an array
Functions are then called to operate on the input selectors array
Returns Cart Items
*/
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

/* Toggles cart hidden display */
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

/* Add quantity from cartItems */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

/* Total of Cart */
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
