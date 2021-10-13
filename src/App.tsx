import React from "react";
// import "./sass/style.css";
import "./sass/hover-css/hover-min.css";
import "./fonts/stylesheet.css";
// import "./styles/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";

const App = () => (
  <div id="Admin-Wrapper">
    <Router>
      <Home />
    </Router>
  </div>
);
export default App;
