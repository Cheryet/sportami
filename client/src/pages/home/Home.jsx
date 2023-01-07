import "./home.scss";

function Home() {
  return (
    <div className="background">
      <div className="home">
        <div className="logo">S P O R T A M I</div>
        <div className="slogan">Turn an ami into an enemy.</div>
        <form className="login">
          <input
            className="username"
            type="username"
            placeholder="Username or email"
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
          ></input>
          <button className="login-button">Login</button>
          <span>
            New to Sportami? <b>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Home;
