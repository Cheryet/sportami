import "./emailName.scss";
import { ArrowBackIos } from "@material-ui/icons";

function EmailName() {
  return (
    <div className="email-name">
      <ArrowBackIos />
      <form className="information">
        <h4>My name and email are</h4>
        <input className="name" type="name" placeholder="First Name" />
        <input className="email" type="email" placeholder="example@gmail.com" />
      </form>
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default EmailName;
