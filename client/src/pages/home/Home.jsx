import React from "react";
import "./home.scss";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginSuccess = await axios.post("/api/login", {
        email: email,
        password: password,
      });
      console.log(loginSuccess);
    } catch (e) {
      console.error(e);
    }

    // 123@gmail.com
    // 12345
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
          <button className="login-button">Login</button>
          <span>
            New to Sportami? <b>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Home;
