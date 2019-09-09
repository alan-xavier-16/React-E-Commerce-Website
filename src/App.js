import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
  );
}

export default App;
