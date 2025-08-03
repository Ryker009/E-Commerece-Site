import './Login.css';

function Login() {
  return (
    <div className="login-wrapper">
      <div className="box">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff2600' }}></i>
        <i style={{ '--clr': '#e2ff06' }}></i>

        <div className="login">
          <div className="heading">
            <h1>Login</h1>
          </div>
          <div className="inputbx">
            <input type="email" id="username" placeholder="Enter your email" />
          </div>
          <div className="inputbx">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="inputbx">
            <button id="sign_in">Sign In</button>
          </div>
          <div className="other">
            <div className="forgot"><a href="#">Forgot Password</a></div>
            <div className="sign_up"><a href="#">Sign Up</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

