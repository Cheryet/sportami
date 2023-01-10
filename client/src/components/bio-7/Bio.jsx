import "./bio.scss";
import { ArrowBackIos } from "@material-ui/icons";
import TextareaAutosize from "react-textarea-autosize";
import React, { useState } from "react";

function Bio({ setCurrent, bio, setBio, setIsPost }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(bio["text"]);

  const handleFinish = () => {
    setBio({
      bio: text,
    });
    setIsPost(true);
  };

  const handleBack = () => {
    setCurrent("Sports");
  };

  return (
    <div className="bio">
      <ArrowBackIos onClick={handleBack} />
      <form className="information">
        <h4 className="title">Add a description about yourself</h4>
        <TextareaAutosize
          className="my-bio"
          placeholder="About yourself"
          rows="1"
          maxLength={300}
          onChange={(event) => {
            setCount(event.target.value.length);
            setText(event.target.value);
          }}
        />
        <p className="word-count">{count} / 300</p>
      </form>
      <button className="finish-button" onClick={handleFinish}>
        Finish
      </button>
    </div>
  );
}

export default Bio;
