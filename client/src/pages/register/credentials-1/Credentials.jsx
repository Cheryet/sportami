import "./credentials.scss";

function Credentials() {
  return (
    <div className="credentials">
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
