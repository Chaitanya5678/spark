import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="options">
          <a href="localhost:8000" target="_self">
            Home
          </a>
          <a href="localhost:8000" target="_self">
            My Portfolio
          </a>
          <a href="localhost:8000" target="_self">
            Clients
          </a>
          <button id="nav-btn">Get in Touch</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
