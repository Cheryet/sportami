import React, { useState } from "react";
import "./home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Home({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      const token = await axios.post("/api/login", {
        email: email,
        password: password,
      });
      setToken(token.data.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="background">
      <div className="home">
        <div className="logo">S P O R T A M I</div>
        <div className="slogan">Turn an ami into an enemy.</div>
        <form className="login" onSubmit={login}>
          <input
            className="username"
            type="text"
            placeholder="Username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="login-button">
            Login
          </button>
          <span>
            New to Sportami? <Link to={`register`}>Sign up now.</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

Home.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Home;
