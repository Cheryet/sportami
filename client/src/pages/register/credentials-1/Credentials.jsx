import "./credentials.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Credentials() {
  return (
    <div className="credentials">
      <Link to={`/`}>
        <ArrowBackIos />
      </Link>
      <form className="information">
        <h4>My username and password are</h4>
        <input className="username" type="username" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
      </form>
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default Credentials;
