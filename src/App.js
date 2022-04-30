import React from "react";

import "./style.css";

import bgimage from "./assets/bg.png";
import navlogo from "./assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div className="main">
      <div className="mainbgimage">
        <img src={bgimage} />
        <div className="overlay"></div>
      </div>
      <header className="navbar">
        <div className="navbarlogo">
          <img src={navlogo} />
        </div>
        <div className="navbaroptions">
          <div className="search">
            <div className="icon">
              <SearchIcon />
            </div>
            <div className="title">Search</div>
          </div>
          <div className="help">Help</div>
          <div className="account">Account</div>
          <div className="iconcart">b</div>
        </div>
      </header>
    </div>
  );
}

export default App;
