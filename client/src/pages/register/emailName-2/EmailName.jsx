import "./emailName.scss";

function EmailName() {
  return (
    <div className="email-name">
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
