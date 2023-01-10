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
    // handle continue will be an axios.post
  };

  const handleBack = () => {
    setCurrent("Sports");
  };

  return (
    <div className="bio">
      <ArrowBackIos onClick={handleBack} />
      <form className="information">
        <h4>Add a description about yourself</h4>
        <TextareaAutosize
          placeholder="About yourself"
          rows="1"
          maxLength={300}
          onChange={(event) => {
            setCount(event.target.value.length);
            setText(event.target.value);
          }}
        />
        <p>{count} / 300</p>
      </form>
      <button className="finish-button" onClick={handleFinish}>
        Finish
      </button>
    </div>
  );
}

export default Bio;
