import React from "react";


import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
       <Route path="/Login">
        <Login />
      </Route> 
      <Route path="/Checkout">
        <Checkout />
      </Route> 
        <Route path="/">
         <Header />
          <Home />
           </Route> 
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
