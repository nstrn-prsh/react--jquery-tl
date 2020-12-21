import React, { useRef } from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const toggleBtn = useRef(null);
  const jqFunc = () => {
    $(findDOMNode(toggleBtn.current)).slideToggle();
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img ref={toggleBtn} src={logo} className='App-logo' alt='logo' />
        <br />
        <button onClick={jqFunc}>click</button>
      </header>
    </div>
  );
}

export default App;
