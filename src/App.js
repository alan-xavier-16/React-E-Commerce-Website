import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/SignInAndSignOut.component";
import Checkout from "./pages/checkout/Checkout.component";
import Header from "./components/header/Header.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

class App extends Component {
  /* HANDLES AUTH CHANGES WITH FIREBASE */
  /* Creates user subscription to app */
  unsubscribeFromAuth = null;

  /* On User Sign in or Sign up, gets user data from Firestore and sets the state of the application for this user */
  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     /* Gets userRefs object from firestore database */
    //     const userRef = await createUserProfileDocument(userAuth);
    //     /* Gets the user snapshot object to access the data */
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     /* On Sign Out */
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  /* Clear subscription */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/*
Returns a user object from the root reducer.
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
