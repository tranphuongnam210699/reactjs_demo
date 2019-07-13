import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./router";
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        {routes}
      </React.Fragment>
    </Router>
  );
}

export default App;
