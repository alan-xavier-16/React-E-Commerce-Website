import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/SignInAndSignOut.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

class App extends Component {
  /* HANDLES AUTH CHANGES WITH FIREBASE */
  /* Creates user subscription to app */
  unsubscribeFromAuth = null;

  /* On User Sign in or Sign up, gets user data from Firestore and sets the state of the application for this user */
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        /* Gets userRefs object from firestore database */
        const userRef = await createUserProfileDocument(userAuth);

        /* Gets the user snapshot object to access the data */
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        /* On Sign Out */
        setCurrentUser(userAuth);
      }
    });
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
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

/*
A function that has a 'dispatch' property and returns an object where the prop name relates to the action we are trying to dispatch.
  - dispatch is a way for Redux to know that the object passed, is an action which is passed to ALL reducers.
*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
