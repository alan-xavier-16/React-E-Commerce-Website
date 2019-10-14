/* Function ensures cart items aren't duplicated. It accepts two inputs, cartItems in the cart, and the item to add.*/
export const addItemToCart = (cartItems, cartItemToAdd) => {
  /* If item to add is in the cart, returns true. Else null. */
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  /* If true, loops through the items in cart and adds 1 to the quantity attribute */
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  /* If false, sets quantity attribute to 1 */
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/* Removes an item from the cart */
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  /* Checks if cart item exists in cart */
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  /* If true, checks if item is equal to 1 and removes it from the cartItems array */
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  /* If true AND quantity is greater than 1 */
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
