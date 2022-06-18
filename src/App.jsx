import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Counter from "header_ui/Counter";
import Footer from "footer_ui/Footer";
const App = () => (
  <div className='container'>
    <div>Name: SPA</div>
    <Counter />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
