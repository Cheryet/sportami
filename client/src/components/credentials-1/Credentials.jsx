import "./credentials.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Credentials({ setCurrent, credentials, setCredentials }) {
  const [username, setUsername] = useState(credentials["username"]);
  const [password, setPassword] = useState(credentials["password"]);

  const handleContinue = () => {
    setCredentials({
      username: username,
      password: password,
    });
    setCurrent("EmailName");
  };
  return (
    <div className="credentials">
      <Link to={`/`}>
        <ArrowBackIos />
      </Link>
      <form className="info1">
        <h4 className="title">My username and password are</h4>
        <input
          className="user"
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="your-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Credentials;
