import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/SignInAndSignOut.component";
import "./App.css";

function App() {
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

export default App;
