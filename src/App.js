import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
