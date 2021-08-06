import React from "react";
import './App.css';
import Header from "./component/header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Authenticate from "./component/form";
import Burger from "./component/burger/burger";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Route path="/burger-order"><Burger /></Route>
          <Route path="/auth"><Authenticate /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
