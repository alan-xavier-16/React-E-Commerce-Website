import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/SignInAndSignOut.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  /* HANDLES AUTH CHANGES WITH FIREBASE */
  /* Creates user subscription to app */
  unsubscribeFromAuth = null;

  /* On User Sign in or Sign up, gets user data from Firestore and sets the state of the application for this user */
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        /* Gets userRefs object from firestore database */
        const userRef = await createUserProfileDocument(userAuth);

        /* Gets the user snapshot object to access the data */
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        /* On Sign Out */
        this.setState({ currentUser: userAuth });
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

export default App;
