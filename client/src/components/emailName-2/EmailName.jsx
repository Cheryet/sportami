import "./emailName.scss";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useState } from "react";

function EmailName({ setCurrent, emailName, setEmailName }) {
  const [firstName, setFirstName] = useState(emailName["firstName"]);
  const [email, setEmail] = useState(emailName["email"]);

  const handleContinue = () => {
    setEmailName({
      firstName: firstName,
      email: email,
    });
    setCurrent("Location");
  };

  const handleBack = () => {
    setCurrent("Credentials");
  };
  return (
    <div className="email-name">
      <ArrowBackIos onClick={handleBack} />
      <form className="information">
        <h4>My name and email are</h4>
        <input
          className="name"
          type="name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default EmailName;
