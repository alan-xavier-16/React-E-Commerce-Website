import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

/* Dispatches the action t toggle cart display */
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

/* Adds quantity property from cartItem */
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
