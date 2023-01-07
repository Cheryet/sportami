import "./bio.scss";
import { ArrowBackIos } from "@material-ui/icons";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

function Bio() {
  const [count, setCount] = useState(0);

  return (
    <div className="bio">
      <ArrowBackIos />
      <form className="information">
        <h4>Add a description about yourself</h4>
        <TextareaAutosize
          placeholder="About yourself"
          maxLength={300}
          onChange={(event) => setCount(event.target.value.length)}
        />
        <p>{count} / 300</p>
      </form>
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default Bio;
