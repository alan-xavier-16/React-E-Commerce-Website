import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/SignInAndSignOut.component";
import Checkout from "./pages/checkout/Checkout.component";
import Header from "./components/header/Header.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  /* On User Sign in or Sign up, gets user data from Firestore and sets the state of the application for this user */
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />

        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignOutPage />
          }
        />
      </Switch>
    </div>
  );
};

/*
Returns a user object from the root reducer.
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
