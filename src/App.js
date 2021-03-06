import React, {} from "react";
import "./App.css";
import "./styles/main_styles.css";
import "./styles/responsive.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Advanced from "./Pages/Advanced";
import About from "./Pages/About";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/advanced" component={Advanced}></Route>
        <Route exact path="/about" component={About}></Route>
      </Router>
    </div>
  );
}

export default App;
