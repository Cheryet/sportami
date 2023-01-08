import "./bio.scss";
import { ArrowBackIos } from "@material-ui/icons";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { Link } from "react-router-dom";

function Bio({ setCurrent }) {
  const [count, setCount] = useState(0);

  // const handleContinue = () => {
  //   // handle continue will be an axios.post
  // };

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
          maxLength={300}
          onChange={(event) => setCount(event.target.value.length)}
        />
        <p>{count} / 300</p>
      </form>
      <Link to="/">
        <button className="finish-button">Finish</button>
      </Link>
    </div>
  );
}

export default Bio;
