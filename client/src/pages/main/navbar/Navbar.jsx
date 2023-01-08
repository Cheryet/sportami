import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar-container">
        <div className="top-container">
          <div className="title">
            <p>SPORTAMI</p>
            <p>Turn an ami into an enemy</p>
          </div>
          <button>Logout</button>
        </div>
        <div className="middle-container">
          <p>Welcome, Corbin!</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
